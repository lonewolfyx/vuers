<template>
    <div class="container py-12 flex-col gap-12">
        <div class="w-full flex flex-col items-center gap-3">
            <span class="text-3xl text-foreground/80 dark:text-foreground">Contributors</span>
            <span class="text-muted-foreground">Thanks to all the contributors to vue and vueuse</span>
        </div>
        <div class="w-full grid grid-cols-12 gap-6">
            <div
                v-for="item in Array.from({ length: 36 }, (_, i) => i+1)"
                :key="`Contributors${item}`"
                :class="cn(
                    'relative w-full h-56',
                    'col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2',
                    'overflow-hidden rounded-lg',
                )"
            >
                <img
                    alt="Mysha Feeney"
                    class="w-full h-full object-cover"
                    src="https://avatars.githubusercontent.com/yyx990803"
                >

                <div class="absolute inset-x-4 bottom-2 rounded-lg bg-transparent p-4 shadow backdrop-blur-xl">
                    <div class="flex flex-col gap-4">
                        <div class="flex w-full justify-between items-center">
                            <span class="text-xs font-medium text-green-500">#1</span>
                            <span class="text-xs font-light text-muted leading-tight">
                                Mysha Feeney
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <!--                    <div -->
            <!--                        v-for="item in Array.from({ length: 36 }, (_, i) => i+1)" -->
            <!--                        :key="`Contributors${item}`" -->
            <!--                        class="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2" -->
            <!--                    > -->
            <!--                        <div class="relative flex flex-col items-center gap-4"> -->
            <!--                            <img -->
            <!--                                alt="sad" -->
            <!--                                class="w-24 h-24 rounded-full object-cover" -->
            <!--                                src="https://avatars.githubusercontent.com/yyx990803" -->
            <!--                            > -->
            <!--                            <span class="w-full text-sm truncate text-center">Evan You</span> -->
            <!--                        </div> -->
            <!--                    </div> -->
        </div>
        <div class="w-full flex justify-center">
            <Button
                as-child
                class="rounded-full"
                variant="secondary"
            >
                <NuxtLink
                    href="https://github.com/vueuse/vueuse/graphs/contributors"
                    target="_blank"
                >
                    View more contributors
                </NuxtLink>
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'HomeContributors',
})
</script>
