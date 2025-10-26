<template>
  <div class="w-screen bg-[#001A33] h-[89px] lg:px-17.5 lg:py-7.5 px-4 py-4 w-screen">
    <header class="flex items-center h-full justify-between lg:hidden relative">
      <NuxtLink to="/">
        <h4 class="text-[24px] font-semibold text-white font-inter">BLACKFYRE</h4>
      </NuxtLink>

      <div 
        @click="toggleMenu"
        class="w-8 *:h-[3px] *:bg-white flex h-5 flex-col justify-between items-end cursor-pointer z-[60]"
      >
        <span ref="hamOne" class="w-full"></span>
        <span ref="hamTwo" class="w-2/3"></span>
        <span ref="hamThree" class="w-1/3"></span>
      </div>

      <nav 
        ref="mobileNav"
        class="fixed top-0 right-0 w-[75%] h-screen bg-[#001A33] flex flex-col items-center px-8 z-[50]"
      >
        <div class="flex flex-col gap-y-6 text-2xl text-white mt-35 *:text-right *:cursor-pointer">
          <NuxtLink to="/" @click="closeMenu">Dashboard</NuxtLink>
          <NuxtLink to="/nft" @click="closeMenu">NFT</NuxtLink>
          <NuxtLink to="/token" @click="closeMenu">Token</NuxtLink>
          <NuxtLink to="/roadmap" @click="closeMenu">RoadMap</NuxtLink>
          <NuxtLink to="/pricing" @click="closeMenu">Pricing</NuxtLink>
        </div>
      </nav>
    </header>

    <header class="lg:flex items-center h-full justify-between hidden max-w-[1440px] mx-auto">
      <h4 class="text-[24px] font-semibold text-white font-inter">BLACKFYRE</h4>
      <div class="flex gap-x-6 text-white text-base">
        <NuxtLink to="/">Dashboard</NuxtLink>
        <NuxtLink to="/nft">NFT</NuxtLink>
        <NuxtLink to="/token">Token</NuxtLink>
        <NuxtLink to="/roadmap">RoadMap</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const { $gsap } = useNuxtApp()

const mobileNav = ref(null)
const openMobileNav = ref(false)
const hamOne = ref(null)
const hamTwo = ref(null)
const hamThree = ref(null)

onMounted(() => {
  if (mobileNav.value) {
    $gsap.set(mobileNav.value, {x: 0, display: 'none' })
  }
})

function toggleMenu() {
  openMobileNav.value = !openMobileNav.value

  if (openMobileNav.value) {
    $gsap.set(mobileNav.value, { display: 'flex' })
    $gsap.to(mobileNav.value, { x: 0, duration: 0.8, ease: 'power3.out' })

    $gsap.to(hamOne.value, { rotate: 45, y: 6, duration: 0.3 })
    $gsap.to(hamTwo.value, { opacity: 0, duration: 0.3 })
    $gsap.to(hamThree.value, { rotate: -45, y: -10, width: '100%', duration: 0.3 })
  } else {
    closeMenu()
  }
}

function closeMenu() {
  openMobileNav.value = false
  $gsap.to(mobileNav.value, {
    x: '100%',
    duration: 0.8,
    ease: 'power3.in',
    onComplete: () => $gsap.set(mobileNav.value, { display: 'none' })
  })

  $gsap.to(hamOne.value, { rotate: 0, y: 0, duration: 0.3 })
  $gsap.to(hamTwo.value, { opacity: 1, duration: 0.3 })
  $gsap.to(hamThree.value, { rotate: 0, y: 0, width: '33%', duration: 0.3 })
}
</script>

<style scoped>
/* 🔹 Highlight active route */
.router-link-active,
.router-link-exact-active {
  color: #36C3E9; /* bright blue for active */
  font-weight: 600;
}

/* Optional smooth color transition */
a {
  transition: color 0.3s ease;
}
</style>