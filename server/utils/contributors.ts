import type { IContributorRecord } from '#shared/types'

export const fetchContributors = cachedFunction<IContributorRecord[]>(async (event) => {
    const url = getRequestURL(event)

    return $fetch<IContributorRecord[]>(`${url.protocol}//${url.host}/contributors.json`)
}, {
    getKey: () => 'contributors',
    maxAge: 60 * 60, // 1 hour
})
