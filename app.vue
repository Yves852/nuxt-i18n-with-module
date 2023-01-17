<script setup>
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

watch(locale, async () => await navigateTo(localePath(route.meta.path)))
</script>

<template>
  <div>
    <nav>
      <span class="font-bold uppercase">{{ locale ? locale : '' }}</span>
      <ul class="px-0">
        <li>
          <NuxtLink :to="switchLocalePath('fr')">Francais</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="switchLocalePath('nl')">Nederlands</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
        </li>
      </ul>
    </nav>
    
    <NuxtLink :to="localePath('/')">Home</NuxtLink>&ThinSpace;
    <NuxtLink :to="localePath('/module')">Module</NuxtLink>&ThinSpace;
    <NuxtLink :to="localePath('/about-us')">About</NuxtLink>
    <div style="margin-top: 2em;">
      <NuxtPage />
    </div>
  </div>
</template>
