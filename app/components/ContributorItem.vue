<template>
    <NuxtLink
        :title="contributor.username"
        :to="`/${contributor.username}`"
    >
        <img
            :alt="contributor.username"
            :src="`https://avatars.githubusercontent.com/${contributor.username}`"
            class="w-full h-full object-cover"
        >

        <div class="absolute inset-x-4 bottom-2 rounded-lg bg-transparent p-4 shadow backdrop-blur-xl">
            <div class="flex flex-col gap-4">
                <div class="flex w-full justify-between items-center">
                    <span class="text-xs font-medium text-green-500">#{{ contributor.rank }}</span>
                    <span class="text-xs font-light text-muted leading-tight">
                        {{ contributor.username }}
                    </span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { IContributorRecord } from '#shared/types'

defineOptions({
    name: 'ContributorItem',
})

withDefaults(defineProps<{
    contributor: IContributorRecord
}>(), {
    contributor: [],
})
</script>
