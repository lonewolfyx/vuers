<template>
    <div class="flex flex-col">
        <div class="container py-12 flex-col gap-12">
            <div class="w-full flex flex-col items-center gap-3">
                <span class="text-3xl text-foreground/80 dark:text-foreground">Core Team</span>
                <span class="text-muted-foreground">Meet the people behind vue and vueuse</span>
            </div>
            <div class="w-full grid grid-cols-12 gap-12">
                <div
                    v-for="(member, index) in teamMembers"
                    :key="`Core Team${index}`"
                    class="col-span-12 md:col-span-4 xl:col-span-2"
                >
                    <div
                        class="relative flex flex-col bg-clip-border rounded-xl bg-transparent w-full h-full"
                    >
                        <div
                            :class="cn(
                                'relative bg-clip-border',
                                'bg-transparent shadow-none',
                                'rounded-xl md:rounded-2xl overflow-hidden',
                                'h-64 w-full',
                            )"
                        >
                            <img
                                :alt="member.username"
                                :src="member.avatar_url"
                                class="relative h-full w-full object-cover object-bottom"
                            >
                            <div
                                class="to-bg-deep-purple-90 absolute left-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-black/50 via-black/50 to-transparent"
                            />
                        </div>

                        <div class="p-6 absolute z-10 w-full h-full grid justify-center items-end">
                            <div>
                                <NuxtLink
                                    :class="cn(
                                        'block antialiased tracking-normal',
                                        'text-xl font-medium leading-snug',
                                        'text-muted dark:text-foreground',
                                    )"
                                    :to="`/${member.username}`"
                                >
                                    {{ member.username }}
                                </NuxtLink>
                                <div class="flex items-center justify-center gap-1 mt-2">
                                    <Button
                                        as-child
                                        class="hover:bg-neutral-500/20"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <NuxtLink
                                            :to="`https://github.com/${member.username}`"
                                            target="_blank"
                                        >
                                            <Icon
                                                class="text-muted dark:text-muted-foreground"
                                                mode="svg"
                                                name="mdi:github"
                                            />
                                        </NuxtLink>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-if="allTeamMembers.length > limit"
                class="w-full flex justify-center"
            >
                <Button
                    class="rounded-full"
                    variant="secondary"
                    @click="showMore"
                >
                    View more core team members
                </Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import type { ITeamMemberRecord } from '#shared/types'

useSeoMeta({
    title: 'Vue and VueUse Team Members',
    description: 'Joined vue and vueuse organizations',
})

const url = useRequestURL().origin

const { data: allTeamMembers } = useLazyFetch<ITeamMemberRecord[]>('/team-member.json', {
    baseURL: url,
    server: false,
    default: () => [],
})

const limit = useState('members-limit', () => 18)

const showMore = () => {
    limit.value += 18
}

const teamMembers = computed(() => {
    return allTeamMembers.value.slice(0, limit.value)
})
</script>
