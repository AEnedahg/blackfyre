<template>
    <div class="bg-[#021323] w-screen">
        <section class="max-w-[1440px] mx-auto md:px-[73px] p-4">
            <hr class="text-white/39" />
            <h1 class="lg:text-[48px] 
                text-[24px] capitalize text-center
            font-medium text-white font-inter
            leading-[28px]
            lg:leading-[54px] -tracking-[2%] my-10">
                BalackFyre Token Summary
            </h1>
            <div class="grid grid-cols-1 grid-rows-8 md:grid-cols-4 md:grid-rows-2 gap-5">
                <div
                    v-for="tokenSummary of tokenSummaryList" :key="tokenSummary.id"
                    :class="[
                        'col-span-1 row-span-1 md:col-span-1 rounded-[10px] px-4 mx-auto lg:mx-0 h-[302px] flex flex-col items-center gap-y-5 py-10 bg-[#0C2F50] w-[260px]',
                        tokenSummary.id === 4 ? 'row-span-2 md:col-span-1 h-full' : ''
                    ]"
                >
                    <img :src="tokenSummary.src" :alt="tokenSummary.alt" />
                    <p class="
                        text-[18px] leading-[30px] -tracking-[2%] font-normal
                        text-[#FDFDFD] text-center
                    "
                    >{{ tokenSummary.text }}</p>
                    <div v-if="tokenSummary.id == 4" class="mt-10">
                        <h5 class="uppercase text-center text-white font-bold text-[18px]">stay up to date</h5>
                        <div class="flex items-center mt-6">
                            <input type="email" name="email" placeholder="EMAIL" 
                                class="text-white border-white rounded-tl-[5px] rounded-bl-[5px]
                                placeholder:text-[#858585] p-2 border-1 w-[76%]
                                "
                            />
                            <button class="bg-[#86C3FF] rounded-tr-[5px] rounded-br-[5px] p-[13px] w-[24%]">
                                <img src="/images/icons/arrow-right.png" alt="arrow-right"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const tokenSummaryList = [
    {
        id: 1,
        src: '/images/token-summary-one.svg',
        alt: 'token-summary-one',
        text: 'Accrue value through utility, not hyperinflation'
    },
    {
        id: 2,
        src: '/images/token-summary-two.svg',
        alt: 'token-summary-two',
        text: "Fuel Whalemap's ecosystem of utility through a secondary token (xWMP)"
    },
    {
        id: 3,
        src: '/images/token-summary-three.svg',
        alt: 'token-summary-three',
        text: 'A new take on token utility in the analytics space'
    },
    {
        id: 4,
        src: '/images/token-summary-four.svg',
        alt: 'token-summary-four',
        text: "Airdrop to Whalemap's loyal users that have joined its journey over the past year"
    },
    {
        id: 5,
        src: '/images/token-summary-five.svg',
        alt: 'token-summary-five',
        text: "Key supporters get rewarded as Whalemap's use grows"
    },
    {
        id: 6,
        src: '/images/token-summary-six.svg',
        alt: 'token-summary-six',
        text: 'Long-term lockups that are only meant for long-term believers'
    },
    {
        id: 7,
        src: '/images/token-summary-seven.svg',
        alt: 'token-summary-seven',
        text: 'Specialised governance power over Whalemap for core believers'
    }
]
</script>