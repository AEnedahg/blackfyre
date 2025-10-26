<template>
    <div class="bg-[#021323] w-screen">
        <section class="max-w-[1440px] mx-auto md:px-[73px] p-4
            lg:pb-[90px]
        ">
            <div class="flex justify-between">
                <img src="/images/arrow-right.svg" alt="arrow-right" 
                    class="w-1/3"
                />
                <h1 class="lg:text-[48px] 
                text-[24px] capitalize
            font-bold text-white text-center font-inter
            lg:leading-[54px] -tracking-[2%] w-1/3">Backed By Best</h1>
                <img src="/images/arrow-left.svg" alt="arrow-left" 
                    class="w-1/3"
                />
            </div>
            <div class="grid grid-cols-1 grid-rows-8 lg:grid-cols-3 lg:grid-rows-3 gap-5 pt-10">
                <div class="col-span-1 row-span-1 lg:col-span-1 lg:row-span-1
                    *:text-[24px] *:font-medium *:text-white *:capitalize
                ">
                    <h5 class="mb-4">WMP - the backbone of the Whalemap ecosystem on Solana</h5>
                    <h5>xWMP - secondary token generating Whalemap's utility</h5>
                </div>
                <div v-for="tokenBackedItem of tokenBackedList" :key="tokenBackedItem.id"
                class="bg-[#0C2F50] flex flex-col-reverse lg:flex-row p-[31px] rounded-[10px]
                max-w-[273px] mx-auto lg:mx-0
                "
                >
                    <div class="w-4/5">
                        <h6 class="text-[18px] font-bold text-white mb-3">{{ tokenBackedItem.heading }}</h6>
                        <p class="text-[18px] font-medium text-white/50">{{ tokenBackedItem.text }}</p>
                    </div>
                    <div class="flex items-center justify-center w-1/5">
                        <img :src="tokenBackedItem.src" alt="token-backed-icon" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const tokenBackedList = [
    {
        id: 1,
        heading: 'xWMP FUEL',
        text: 'Exclusive usage of xWMP to get access to premium features of Whalemap PRO',
        src: '/images/token-backed-icon-one.svg'
    },
     {
        id: 2,
        heading: 'STAKING',
        text: 'Farm xWMP by staking WMP and get a subscription for free or claim xWMP as rewards',
        src: '/images/token-backed-icon-two.svg'
    },
     {
        id: 3,
        heading: 'UTILITY',
        text: 'Exclusive usage of xWMP to get access to premium features of Whalemap PRO',
        src: '/images/token-backed-icon-three.svg'
    },
     {
        id: 4,
        heading: 'REWARD REDISTRIBUTION',
        text: 'Stake xWMP to get rewarded from increased usage of the platform',
        src: '/images/token-backed-icon-four.svg'
    },
     {
        id: 5,
        heading: 'BURNING',
        text: 'Stabilising xWMP supply by burning it',
        src: '/images/token-backed-icon-five.svg'
    },
     {
        id: 6,
        heading: 'GOVERNANCE',
        text: 'Specialised governance power over Whalemap for core believers',
        src: '/images/token-backed-icon-six.svg'
    },
     {
        id: 7,
        heading: 'NON LINEAR REVERSE',
        text: "Dynamically decreasing share of Whalemap's revenue going to reserves and limiting inflation",
        src: '/images/token-backed-icon-seven.svg'
    },
]
</script>