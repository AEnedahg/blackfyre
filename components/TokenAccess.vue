<template>
    <div class="bg-[#021323] w-screen relative">
        <section class="max-w-[1440px] mx-auto md:px-[73px] p-4 pb-[90px]">
            <h4 class="text-[18px] lg:text-[24px] font-medium text-[#8B8B8B]">PRO.WHALEMAP.IO</h4>
            <h1 class="lg:text-[48px] 
                text-[24px] capitalize
            font-medium text-white font-inter
            leading-[28px]
            lg:leading-[54px] -tracking-[2%] mb-10">Get access exclusively using xWMP</h1>
            <img src="/images/solution-section-img.png" alt="solution-section-img"
                class="md:max-h-full max-h-[300px]"
            />
            <div class="
            grid md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-4
                gap-[26px] mt-10
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
        <img src="/images/features-two-line.svg" alt="features-two-line" 
        class="absolute left-0 top-[10%] md:top-[12%]"/>
    </div>
</template>

<script setup>
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