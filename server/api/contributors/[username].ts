import { fetchContributors } from '~~/server/utils/contributors'
import { fetchTeamMembers } from '~~/server/utils/members'

export default eventHandler(async (event) => {
    const username = getRouterParam(event, 'username')
    if (!username) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Username missing',
        })
    }
    const contributors = await fetchContributors(event)
    const members = await fetchTeamMembers(event)

    const contributorIndex = contributors?.findIndex(contributor => contributor.username.toLowerCase() === username.toLocaleLowerCase()) ?? -1
    const memberIndex = members?.findIndex(member => member.username.toLowerCase() === username.toLocaleLowerCase()) ?? -1

    if (contributorIndex === -1) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Contributor not found',
        })
    }

    return {
        ...contributors![contributorIndex]!,
        rank: contributorIndex + 1,
        member: members![memberIndex]!,
    }
})
