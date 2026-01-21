import { dirname, resolve } from 'node:path'
import * as process from 'node:process'
import { Octokit } from 'octokit'
import dotenv from 'dotenv'
import { mkdir, writeFile } from 'node:fs/promises'

dotenv.config({ path: '../.env' })

const REQUIRED_TOKEN_MESSAGE = 'VUERS_GITHUB_TOKEN is required to collect contributor statistics'
const ORGS = [
    'vuejs',
    'vueuse',
]

const OUTPUT_FILE = resolve(process.cwd(), '../public/team-member.json')
const USER_AGENT = 'team-member-collector'
const token = process.env.VUERS_GITHUB_TOKEN

interface TeamMemberRecord {
    username: string
    id: number
    avatar_url: string
    org: string[]
}

if (!token) {
    console.error(REQUIRED_TOKEN_MESSAGE)
    process.exit(1)
}

const octokit = new Octokit({
    auth: token,
    userAgent: USER_AGENT,
})

const saveTeamMembers = async (data: TeamMemberRecord[]) => {
    await mkdir(dirname(OUTPUT_FILE), { recursive: true })
    await writeFile(OUTPUT_FILE, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
    console.log(`Wrote ${data.length} team members to ${OUTPUT_FILE}`)
}

async function getCombinedOrgMembers(orgs: string[]) {
    // Key is username (login), and the Value is the user information object
    const memberMap = new Map<string, TeamMemberRecord>()

    for (const org of orgs) {
        try {
            console.log(`Fetching members of ${org}...`)

            const members = await octokit.paginate(octokit.rest.orgs.listMembers, {
                org: org,
                per_page: 100,
            })

            for (const member of members) {
                const username = member.login

                if (memberMap.has(username)) {
                    // If the user already exists, simply add the current organization name to the org array
                    const existingUser = memberMap.get(username)
                    if (!existingUser.org.includes(org)) {
                        existingUser.org.push(org)
                    }
                }
                else {
                    // If the user is new, create the full information object
                    memberMap.set(username, {
                        username: member.login,
                        id: member.id,
                        avatar_url: member.avatar_url,
                        org: [org],
                    })
                }
            }
        }
        catch (error) {
            console.error(`Unable to retrieve data for organization ${org}:`, error.message)
        }
    }

    const result = Array.from(memberMap.values()).sort((a, b) => {
        return b.org.length - a.org.length
    })

    console.log(JSON.stringify(result, null, 2))

    // count the overlap number
    const overlaps = result.filter(m => m.org.length > 1)
    console.log(`\nStatistics: There are ${result.length} unique members, of which ${overlaps.length} belongs to more than one organization`)

    await saveTeamMembers(result)
}

(async () => {
    // await getAllOrgMembers('vuejs')
    await getCombinedOrgMembers(ORGS)
})()
