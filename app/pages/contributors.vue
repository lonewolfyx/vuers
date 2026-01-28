<template>
    <div class="flex flex-col">
        <div class="container py-12 flex-col gap-12">
            <div class="w-full flex flex-col items-center gap-3">
                <span class="text-3xl text-foreground/80 dark:text-foreground">Contributors</span>
                <span class="text-muted-foreground">Thanks to all the contributors to vue and vueuse</span>
            </div>
            <div class="w-full grid grid-cols-12 gap-6">
                <div
                    v-for="(contributor, index) in contributors"
                    :key="`Contributors${index}`"
                    :class="cn(
                        'bg-green-500/20 relative w-full h-56',
                        'col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2',
                        'overflow-hidden rounded-lg',
                    )"
                >
                    <ContributorItem :contributor="contributor" />
                </div>
            </div>
            <div
                v-if="communityContributors.length > limit"
                class="w-full flex justify-center"
            >
                <Button
                    class="rounded-full"
                    variant="secondary"
                    @click="showMore"
                >
                    View more core team contributors
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils'
import type { IContributorRecord, ITeamMemberRecord } from '#shared/types'

useSeoMeta({
    title: 'vue and vueuse contributor user list',
    description: 'Discover contributions on vuejs and vueuse organisations.',
})

const url = useRequestURL().origin

const { data: allContributors } = useLazyFetch<IContributorRecord[]>('/contributors.json', {
    baseURL: url,
    server: false,
    default: () => [],
})

const { data: allTeamMembers } = useLazyFetch<ITeamMemberRecord[]>('/team-member.json', {
    baseURL: url,
    server: false,
    default: () => [],
})

const communityContributors = computed(() => {
    if (!allContributors.value || !allTeamMembers.value) return []

    const teamNames = new Set(allTeamMembers.value.map(m => m.username))

    return allContributors.value.filter(
        c => !teamNames.has(c.username),
    )
})

const limit = useState('contributors-limit', () => 36)

const showMore = () => {
    limit.value += 36
}

const contributors = computed(() => {
    return communityContributors.value.slice(0, limit.value)
})
</script>
