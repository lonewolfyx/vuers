<template>
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
</template>

<script lang="ts" setup>
defineOptions({
    name: 'HomeHero',
})
</script>
