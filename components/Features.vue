<template>
  <div class="bg-[#021323] w-screen">
    <section class="max-w-[1440px] mx-auto md:px-[73px] p-4">
      <hr class="text-white/39" />
    
      <div class="flex md:flex-row flex-col justify-between items-center">
        <div
        v-for="feature in featuresListOne"
        :key="feature.id"
        class="mt-14 md:mt-20 md:max-w-[394px]"
      >
          <h1
            class="lg:text-[48px] text-[24px] capitalize font-semibold text-white font-inter leading-[28px]
                   lg:leading-[54px] -tracking-[2%] text-center md:text-left"
          >
            {{ feature.heading }}
          </h1>

          <p
            class="leading-[33px] font-semibold text-[#C1C1C1] lg:text-[18px] text-base -tracking-[2%]
                   lg:mb-[32px] lg:mt-[35px] mt-[20px] mb-[34px] text-center md:text-left"
          >
            {{ feature.para }}
          </p>
        </div>
      </div>
      <div class="
      grid md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-4
        gap-[26px]
      ">
        <div v-for="feature of featuresListTwo" :key="feature.id"
            class="py-[59px] px-[68px] flex flex-col gap-y-3 bg-[#0C2F50] rounded-[10px]
            max-w-[240px] mx-auto md:col-span-1 md:row-span-1 col-span-1 row-span-1
            "
        >
            <img :src="feature.src" :alt="feature.text"
                class="mx-auto"
            />
            <p class="text-lg md:text-[24px] text-white font-normal leading-[22px] md:leading-[30px]
                text-[#FDFDFD] text-center -tracking-[2%]
            ">{{ feature.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const featuresListOne = [
  {
    id: 1,
    heading: 'Speed suitable for mempools',
    para: 'Our state of the art technological stack allows us to analyse blockchains and their transactions in microseconds, providing truly real-time blockchain data.',
  },
  {
    id: 2,
    heading: 'Solana analytics and more',
    para: 'Whalemap is one of the first providers of analysed Solana data on the market — and Solana is not the final stop.',
  },
  {
    id: 3,
    heading: 'DeFi protocol analytics',
    para: "Gain insight into DeFi tokens' true value based on the underlying fundamentals of their smart contracts.",
  },
]
const featuresListTwo = [
    {
        id: 1,
        src: '/images/features-icon-one.svg',
        text: 'Track multiple blockchains'
    },
    {
        id: 2,
        src: '/images/features-icon-two.svg',
        text: 'Super realtime'
    },
    {
        id: 3,
        src: '/images/features-icon-three.svg',
        text: 'Analyse DeFi protocols'
    },
    {
        id: 4,
        src: '/images/features-icon-four.svg',
        text: 'Labeled wallets'
    },
    {
        id: 5,
        src: '/images/features-icon-five.svg',
        text: 'DEX integration'
    },
]
</script>
