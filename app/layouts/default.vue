<template>
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
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
</script>

<style scoped></style>
