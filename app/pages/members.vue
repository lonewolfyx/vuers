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
                    <div class="flex flex-col items-center gap-5">
                        <NuxtLink
                            :to="`https://github.com/${member.username}`"
                            class="w-40 h-40"
                            target="_blank"
                        >
                            <img
                                class="h-full w-full object-cover object-bottom rounded-full"
                                :alt="member.username"
                                :src="member.avatar_url"
                            >
                        </NuxtLink>
                        <div class="flex items-center gap-2">
                            <Icon
                                mode="svg"
                                name="logos:vue"
                            />
                            <Icon
                                mode="svg"
                                name="logos:vueuse"
                            />
                            <NuxtLink
                                :to="`/${member.username}`"
                                class="text-foreground font-mono font-medium"
                                target="_blank"
                            >
                                {{ member.username }}
                            </NuxtLink>
                        </div>
                        <div class="flex items-center justify-center gap-1">
                            <Button
                                as-child
                                class="hover:bg-neutral-500/20"
                                size="icon"
                                variant="ghost"
                            >
                                <NuxtLink
                                    :to="`https://github.com/`"
                                    target="_blank"
                                >
                                    <Icon
                                        class="text-foreground text-2xl"
                                        mode="svg"
                                        name="mdi:github"
                                    />
                                </NuxtLink>
                            </Button>
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

const limit = useState('members-limit', () => 36)

const showMore = () => {
    limit.value += 36
}

const teamMembers = computed(() => {
    return allTeamMembers.value.slice(0, limit.value)
})
</script>
