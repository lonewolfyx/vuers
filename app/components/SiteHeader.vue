<template>
    <div class="container">
        <div class="w-full flex justify-between items-center h-12">
            <NuxtLink to="/">
                <div class="flex items-center gap-2">
                    <Icon
                        class="size-5 text-green-500"
                        mode="svg"
                        name="logos:vue"
                    />
                    .vuer:$
                </div>
            </NuxtLink>

            <div class="flex items-center gap-3">
                <Button
                    as-child
                    variant="ghost"
                >
                    <NuxtLink to="/members">
                        Team Members
                    </NuxtLink>
                </Button>
                <Button
                    as-child
                    variant="ghost"
                >
                    <NuxtLink to="/contributors">
                        Contributors
                    </NuxtLink>
                </Button>

                <Separator
                    class="h-4! bg-neutral-500/50"
                    orientation="vertical"
                />
                <GithubLink />
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
import GithubLink from '~/components/GitHubLink.vue'

defineOptions({
    name: 'SiteHeader',
})
</script>
