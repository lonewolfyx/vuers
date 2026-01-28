export interface Contributor {
    username: string
    githubId: string
    issues: number
    merged_pull_requests: number
    helpful_issues: number
    comments: number
    helpful_comments: number
    reactions: number
    score: number
    rank: number
}

export interface Members {
    username: string
    id: number
    avatar_url: string
    org: string[]
}

export interface ITeamMemberRecord {
    username: string
    id: number
    avatar_url: string
    org: string[]
}
