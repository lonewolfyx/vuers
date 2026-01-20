<template>
    <SiteBody>
        <div
            :class="cn(
                'absolute inset-0 z-10',
                '[background-size:16px_16px]',
                'bg-[radial-gradient(#0000001a_1px,transparent_1px)]',
                'dark:bg-[radial-gradient(#ffffff29_1px,#0f172a_1px)]',
            )"
        />
        <div class="absolute w-px border-l border-dashed h-full left-30 z-10" />
        <div class="absolute w-px border-r border-dashed h-full right-30 z-10" />
        <div class="flex flex-col z-20">
            <div class="container">
                <div class="w-full flex justify-between items-center h-12">
                    <span>>.vuer:$</span>
                    <div class="flex items-center gap-3">
                        <Button
                            as-child
                            variant="ghost"
                        >
                            <NuxtLink to="/">
                                Team Members
                            </NuxtLink>
                        </Button>
                        <Button
                            as-child
                            variant="ghost"
                        >
                            <NuxtLink to="/">
                                Contributors
                            </NuxtLink>
                        </Button>

                        <Separator
                            class="h-4! bg-neutral-500/50"
                            orientation="vertical"
                        />
                        <Button
                            as-child
                            variant="ghost"
                        >
                            <NuxtLink
                                href="https://github.com"
                                target="_blank"
                            >
                                <Icon
                                    mode="svg"
                                    name="line-md:github-loop"
                                />
                                <span>333,333</span>
                            </NuxtLink>
                        </Button>
                        <Separator
                            class="h-4! bg-neutral-500/50"
                            orientation="vertical"
                        />
                        <ModeSwitcher />
                    </div>
                </div>
            </div>
            <div
                :class="cn(
                    'relative border-t border-dashed',
                    'before:absolute before:size-4 before:bg-neutral-100 before:-top-2 before:rounded-full before:left-28',
                    'after:absolute after:size-4 after:bg-neutral-100 after:-top-2 after:rounded-full after:right-28',
                    'dark:before:bg-zinc-800 dark:after:bg-zinc-800',
                )"
            />
            <div class="container flex-col">
                <div class="w-full max-w-[45rem] mx-auto flex justify-center py-40">
                    <div class="flex flex-col items-center gap-10">
                        <span class="text-6xl">Are you a <span class="text-green-500">Vuer</span>?</span>
                        <p class="mb-5">
                            Discover your contributions on vuejs and vueuse organisations, and share your Vuer profile.
                        </p>
                        <div class="w-full content-start space-y-4">
                            <p>Unlock the vuer role by having either:</p>
                            <ul class="flex flex-col gap-2">
                                <li class="flex items-center gap-2">
                                    <Icon
                                        class="text-green-500"
                                        mode="svg"
                                        name="lets-icons:check-fill"
                                    />
                                    <span>1 pull request merged</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <Icon
                                        class="text-green-500"
                                        mode="svg"
                                        name="lets-icons:check-fill"
                                    />
                                    <span>1 helpful issue (3+ reactions)</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <Icon
                                        class="text-green-500"
                                        mode="svg"
                                        name="lets-icons:check-fill"
                                    />
                                    <span>1 helpful comment (3+ reactions)</span>
                                </li>
                            </ul>
                        </div>
                        <Button
                            class="w-fit group"
                            variant="secondary"
                        >
                            Just do it
                            <Icon
                                class="ml-2 size-4 group-hover:translate-x-1 transition-transform"
                                mode="svg"
                                name="lucide:arrow-right"
                            />
                        </Button>
                    </div>
                </div>
                <div class="w-full max-w-56 flex flex-col gap-10 items-center" />
            </div>
            <div
                :class="cn(
                    'relative border-t border-dashed',
                    'before:absolute before:size-4 before:bg-neutral-100 before:-top-2 before:rounded-full before:left-28',
                    'after:absolute after:size-4 after:bg-neutral-100 after:-top-2 after:rounded-full after:right-28',
                    'dark:before:bg-zinc-800 dark:after:bg-zinc-800',
                )"
            />
            <div class="container py-12 flex-col gap-12">
                <div class="w-full flex flex-col items-center gap-3">
                    <span class="text-3xl text-foreground/80 dark:text-foreground">Core Team</span>
                    <span class="text-muted-foreground">Meet the people behind vue and vueuse</span>
                </div>
                <div class="w-full grid grid-cols-12 gap-4">
                    <div
                        v-for="item in Array.from({ length: 18 }, (_, i) => i+1)"
                        :key="`Core Team${item}`"
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
                                    alt="Evan You"
                                    class="relative h-full w-full object-cover object-bottom"
                                    src="https://avatars.githubusercontent.com/yyx990803"
                                >
                                <div
                                    class="to-bg-deep-purple-90 absolute left-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-black/50 via-black/50 to-transparent"
                                />
                            </div>

                            <div class="p-6 absolute z-10 w-full h-full grid justify-center items-end">
                                <div>
                                    <span
                                        :class="cn(
                                            'block antialiased tracking-normal',
                                            'text-xl font-medium leading-snug',
                                            'text-muted dark:text-foreground',
                                        )"
                                    >
                                        Evan You
                                    </span>
                                    <div class="flex items-center justify-center gap-1 mt-2">
                                        <Button
                                            as-child
                                            class="hover:bg-neutral-500/20"
                                            size="icon"
                                            variant="ghost"
                                        >
                                            <NuxtLink to="https://github.com">
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
                            View more core team members
                        </NuxtLink>
                    </Button>
                </div>
            </div>
            <div
                :class="cn(
                    'relative border-t border-dashed',
                    'before:absolute before:size-4 before:bg-neutral-100 before:-top-2 before:rounded-full before:left-28',
                    'after:absolute after:size-4 after:bg-neutral-100 after:-top-2 after:rounded-full after:right-28',
                    'dark:before:bg-zinc-800 dark:after:bg-zinc-800',
                )"
            />
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
            <div
                :class="cn(
                    'relative border-t border-dashed',
                    'before:absolute before:size-4 before:bg-neutral-100 before:-top-2 before:rounded-full before:left-28',
                    'after:absolute after:size-4 after:bg-neutral-100 after:-top-2 after:rounded-full after:right-28',
                    'dark:before:bg-zinc-800 dark:after:bg-zinc-800',
                )"
            />
            <div class="container py-12">
                <div class="w-full flex justify-between items-center text-xs">
                    <span>© build with NuxtJs v4 & Tailwindcss. Source is on Github</span>
                    <span>made with ❤️ by loenwolfyx</span>
                </div>
            </div>
        </div>
    </SiteBody>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
</script>
