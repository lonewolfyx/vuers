<template>
    <div
        :class="cn(
            'relative border-t border-dashed',
            'before:absolute before:size-4 before:bg-neutral-100 before:-top-2 before:rounded-full before:left-28',
            'after:absolute after:size-4 after:bg-neutral-100 after:-top-2 after:rounded-full after:right-28',
            'dark:before:bg-zinc-800 dark:after:bg-zinc-800',
        )"
    />
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'HomeSeparator',
})
</script>
