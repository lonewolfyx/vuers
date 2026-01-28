<template>
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
                    :to="`https://github.com/${member.username}`"
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
</template>

<script lang="ts" setup>
import type { ITeamMemberRecord } from '#shared/types'

defineOptions({
    name: 'MemberItem',
})

withDefaults(defineProps<{
    member: ITeamMemberRecord
}>(), {})
</script>
