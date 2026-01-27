<template>
    <div class="flex flex-col">
        <div class="container py-12 flex-col">
            <div class="min-h-[calc(100dvh-16rem)] flex items-center">
                <div class="relative flex flex-row w-full h-[500px] rounded-3xl overflow-hidden">
                    <div
                        class="absolute inset-0"
                        :class="cn(
                            'bg-[#0f172a]',
                            'bg-[radial-gradient(200%_200%_at_25%_30%,rgba(64,17,17,0)_0%,rgba(17,19,32,1)_100%)]',
                        )"
                    />

                    <div
                        class="absolute inset-0 bg-[size:20px_20px]"
                        :class="cn(
                            '[--card-bg-color:#0f172a] dark:[--card-bg-color:hsl(0deg_0%_0%_/_31%)]',
                            'bg-[radial-gradient(#ffffff33_1px,var(--card-bg-color)_1px)]',
                        )"
                    />

                    <div class="relative z-10 grid grid-cols-12 h-full w-full text-white">
                        <div class="col-span-3">
                            <div class="flex flex-row h-full p-10 pe-0">
                                <div class="w-full flex flex-col justify-center items-center gap-5">
                                    <NuxtLink
                                        :to="`https://github.com/${username}`"
                                        target="_blank"
                                    >
                                        <img
                                            :src="`https://github.com/${username}.png`"
                                            alt="antfu"
                                            class="rounded-full w-40"
                                        >
                                    </NuxtLink>
                                    <div class="flex flex-col items-center gap-4">
                                        <div class="flex flex-col gap-3">
                                            <NuxtLink
                                                :to="`https://github.com/${username}`"
                                                class="flex items-center gap-3"
                                                target="_blank"
                                            >
                                                <span class="text-neutral-50 text-3xl font-mono font-medium">{{
                                                    username
                                                }}</span>
                                            </NuxtLink>
                                        </div>
                                        <div class="flex justify-center">
                                            <div class="w-32">
                                                <Separator class="my-2" />
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <img
                                                alt="vuers"
                                                class="size-7"
                                                src="/logo.svg"
                                            >
                                            <span class="text-3xl font-medium font-mono">Vuers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-span-1 relative">
                            <div class="h-full flex justify-center items-center">
                                <div class="w-px h-full border-l border-dashed" />
                            </div>
                            <div class="absolute rounded-full w-5 h-5 bg-white top-0 left-1/2 transform -translate-1/2" />
                            <div
                                class="absolute rounded-full w-5 h-5 bg-white bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                            />
                        </div>

                        <div class="col-span-8">
                            <div class="flex flex-col justify-between h-full p-10 ps-0 gap-5">
                                <div class="grid grid-cols-3 flex-1">
                                    <div class="flex flex-col justify-center items-center gap-2">
                                        <span class="text-neutral-50 font-bold text-5xl">38#</span>
                                        <span class="text-neutral-50/53">Rank</span>
                                    </div>
                                    <div class="relative flex flex-col justify-center items-center gap-6">
                                        <div class="flex items-center gap-2 text-xl font-medium">
                                            <Icon
                                                mode="svg"
                                                name="logos:vue"
                                            />
                                            Vue
                                        </div>
                                        <div
                                            :class="cn(
                                                'relative w-full h-px border-t border-dashed border-white/30',
                                                'before:absolute',
                                                'before:w-2 before:h-2',
                                                'before:-left-2 before:top-1/2 before:-translate-y-1/2',
                                                'before:rounded-full before:bg-white/30',
                                                'after:absolute',
                                                'after:w-2 after:h-2',
                                                'after:right-0 after:top-1/2 after:-translate-y-1/2',
                                                'after:rounded-full after:bg-green-500',
                                            )"
                                        />
                                        <div class="flex items-center gap-2 text-xl font-medium">
                                            <Icon
                                                mode="svg"
                                                name="logos:vueuse"
                                            />
                                            VueUse
                                        </div>
                                    </div>
                                    <div class="flex flex-col justify-center items-center gap-2">
                                        <span class="text-neutral-50 font-bold text-5xl">852</span>
                                        <span class="text-neutral-50/53">Score</span>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center">
                                    <div class="flex flex-col gap-2">
                                        <span class="text-neutral-50/53">Issues</span>
                                        <span class="text-neutral-50 font-mono font-medium text-3xl">8</span>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <span class="text-neutral-50/53">Comments</span>
                                        <span class="text-neutral-50 font-mono font-medium text-3xl">282</span>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <span class="text-neutral-50/53">Merged PRs</span>
                                        <span class="text-neutral-50 font-mono font-medium text-3xl">131</span>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <span class="text-neutral-50/53">Reactions</span>
                                        <span class="text-neutral-50 font-mono font-medium text-3xl">179</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

const route = useRoute()
const { username } = route.params
console.log(route)
</script>
