import type { ITeamMemberRecord } from '#shared/types'

export const fetchTeamMembers = cachedFunction<ITeamMemberRecord[]>(async (event) => {
    const url = getRequestURL(event)

    return $fetch<ITeamMemberRecord[]>(`${url.protocol}//${url.host}/team-member.json`)
}, {
    getKey: () => 'team-members',
    maxAge: 60 * 60, // 1 hour
})
