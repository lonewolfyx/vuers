<template>
    <div class="flex flex-col">
        <HomeHero />
        <HomeSeparator />
        <HomeTeamMembers />
        <HomeSeparator />
        <HomeContributors />
    </div>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: 'Are you a Vuer?',
    description: 'Discover your contributions on vuejs and vueuse organisations.',

})
</script>
