<template>
    <div class="bg-[#021323] w-screen relative">
        <section class="pt-[70px] lg:pt-[187px] h-[1000px] md:h-[1500px] lg:px-[178px] px-4 max-w-[1440px] mx-auto md:px-20">
            <div class="lg:max-w-[647px] max-w-[345px]">
                <h1 class="lg:text-[48px] text-[24px] capitalize font-semibold text-white font-inter leading-[28px]
                   lg:leading-[54px] -tracking-[2%] text-left">{{ featuresOne[0] }}</h1>
                <p class="text-base md:text-[24px] font-medium 
                    leading-[20px] mt-[11px]
                md:leading-[37px] -tracking-[2%] font-inter text-[#A6A6A6]">{{ featuresOne[1] }}</p>
                <div class="grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-1 mt-[25px] gap-[13px]">
                    <img 
                        v-for="featureIcon of featuresOneIcons" :key="featureIcon.id"
                    :src="featureIcon.src" :alt="featureIcon.alt" 
                        class="col-span-1 row-span-1 md:col-span-1 md:row-span-1 w-18 md:w-full"
                    />
                </div>
            </div>
            <div class="md:flex md:justify-end">
                <div class="lg:max-w-[647px] mt-[130px] md:mt-[150px] max-w-[345px] md:mr-0">
                    <h1 class="lg:text-[48px] text-[24px] capitalize font-semibold text-white font-inter leading-[28px]
                    lg:leading-[54px] -tracking-[2%] text-left">{{ featuresTwo[0] }}</h1>
                    <p class="text-base md:text-[24px] font-medium 
                        leading-[20px] mt-[11px]
                    md:leading-[37px] -tracking-[2%] font-inter text-[#A6A6A6]">{{ featuresTwo[1] }}</p>
                </div>
            </div>
        </section>
        <img src="/images/features-two-oval.svg" alt="features-two-oval" 
            class="absolute left-0 top-[25%]"
        />
        <img src="/images/features-two-line.svg" alt="features-two-line" 
        class="absolute left-0 top-[52%] md:top-[45%]"/>
        <img src="/images/features-two-oval-two.svg" alt="features-two-oval-two" 
            class="absolute right-0 top-[40%] md:top-[55%]"
        />
        <img src="/images/features-two-line-two.svg" alt="features-two-line" 
        class="absolute right-0 top-[85%] md:top-[75%]"/>
    </div>
</template>

<script setup>
const featuresOne = ["Making blockchain data accessible", "Blockchain data is hard to query, index and analyse. It requires significant engineering and hardware resources. Whalemap takes on this hard job so others don’t have to develop proprietary solutions for on-chain analytics. Leveraging blockchains to make that data accessible is the next step."]
const featuresTwo = ["Supported networks", "In legacy markets, institutions have access to resources that are unavailable to the general public. But with the advent of the blockchain, financial data should no longer just be available to a select few. We at Whalemap believe that this data belongs to everyone, not just a handful of large institutions."]
const featuresOneIcons = [
    {
        id: 1,
        src: '/images/features-two-icon-one.svg',
        alt: 'features-two-icon-one'
    },
    {
        id: 2,
        src: '/images/features-two-icon-two.svg',
        alt: 'features-two-icon-two'
    },
    {
        id: 3,
        src: '/images/features-two-icon-three.svg',
        alt: 'features-two-icon-three'
    },
    {
        id: 4,
        src: '/images/features-two-icon-four.svg',
        alt: 'features-two-icon-four'
    },
    {
        id: 5,
        src: '/images/features-two-icon-five.svg',
        alt: 'features-two-icon-five'
    },
    {
        id: 6,
        src: '/images/features-two-icon-six.svg',
        alt: 'features-two-icon-six'
    }
]
</script>