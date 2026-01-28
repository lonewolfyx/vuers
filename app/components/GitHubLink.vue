<template>
    <Button
        as-child
        class="shadow-none"
        size="sm"
        variant="ghost"
    >
        <NuxtLink
            :to="appConfig.links.github"
            rel="noreferrer"
            target="_blank"
        >
            <Icon name="mdi:github" />
            <Skeleton
                v-if="pending"
            />
            <span
                v-else
                class="text-muted-foreground w-8 text-xs tabular-nums"
            >
                {{ stars }}
            </span>
        </NuxtLink>
    </Button>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'GithubLink',
})

const appConfig = useAppConfig()

const { data, pending } = useLazyFetch(`https://ungh.cc/repos/${appConfig.repo}`)

const stars = computed(() => {
    const count = data.value?.repo?.stars
    if (!count)
        return '∞'

    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toLocaleString()
})
</script>
