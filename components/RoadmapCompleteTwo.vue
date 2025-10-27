<template>
    <div 
    class="w-screen relative bg-[#021323]">
    <hr class="text-white/39"/>
        <section class="max-w-[1440px] mx-auto md:px-[73px]
                lg:py-50 py-20
            p-4 lg:relative">
            <h2 class="sm:text-[48px] text-[28px] capitalize font-medium text-white font-inter
               leading-[28px] lg:leading-[54px] -tracking-[2%] mb-2 md:text-left"
            >Crypto Road Map </h2>
            <p class="text-[#646464] text-[28px]
                -tracking-[2%]
            ">Flat Design (Dark Skin)</p>
            <span class="uppercase text-[#021323] text-[24px] sm:text-[36px] bg-white py-[12px] px-[33px]
                -tracking-[2%] rounded-[10px] my-6 inline-block
            ">
                ICO rOADMAP
            </span>
            <div class="flex">
                <img src="/images/complete-roadmap-vertical-line.png" alt="roadmap vertical line" />
                <div class="flex flex-col mt-20 gap-y-25">
                    <div v-for="roadMapItem of roadMapItems" :key="roadMapItem.id"
                        class="relative bg-[#0C2F50] p-5 ml-10"
                    >
                        <h4 class="text-[20px] sm:text-[28px] text-white mb-2">{{ roadMapItem.heading }}</h4>
                        <p class="text-base sm:text-[24px] text-[#B9B2B2]">{{ roadMapItem.para }}</p>
                        <img src="/images/list-arrow.svg" alt="list-arrow" 
                            class="absolute top-1/2 -translate-y-1/2 -left-[37px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const roadMapItems = [
    {
        id: 1,
        heading: 'Concept & Research',
        para: 'Define project vision, conduct market research, and outline blockchain use case.'
    },
    {
        id: 2,
        heading: 'Team Formation',
        para: 'Assemble core developers, marketing experts, and advisors to execute the project.'
    },
    {
        id: 3,
        heading: 'Token Development',
        para: 'Design tokenomics, create smart contracts, and prepare audit documentation.'
    },
    {
        id: 4,
        heading: 'Pre-Sale & ICO Launch',
        para: 'Launch token pre-sale, build community awareness, and initiate ICO campaigns.'
    },
    {
        id: 5,
        heading: 'Exchange Listing & Expansion',
        para: 'List tokens on major exchanges and start ecosystem development and partnerships.'
    },
]
</script>