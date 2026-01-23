<template>
    <div class="container">
        <div class="w-full flex justify-between items-center h-12">
            <div class="flex items-center gap-2">
                <Icon
                    class="size-5 text-green-500"
                    mode="svg"
                    name="si:terminal-fill"
                />
                .vuer:$
            </div>
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
</template>

<script lang="ts" setup>
defineOptions({
    name: 'SiteHeader',
})
</script>
