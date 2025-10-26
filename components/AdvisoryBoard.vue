<template>
    <div class="bg-[#021323] w-screen">
        <section class="max-w-[1440px] mx-auto md:px-[73px]
            lg:py-50 py-30
        p-4">
           <div class="flex gap-x-10 items-center">
                <h1 class="lg:text-[48px] 
                    text-[24px] capitalize
                font-bold text-white text-center font-inter
                leading-[28px]
                lg:min-w-1/3 lg:leading-[54px] -tracking-[2%]">
                    Advisory board
                </h1>
                <hr class="text-white w-1/4 md:w-2/3" />
           </div>
           <div class="
                grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-y-10
                mt-15
            ">
                <div v-for="advisoryBoardItem of advisoryBoardList" :key="advisoryBoardItem.id"
                    class="*:text-center row-span-1 col-span-1 md:col-span-1 md:row-span-1"
                >
                    <h4 class="text-[24px] font-bold text-white uppercase">{{ advisoryBoardItem.heading }}</h4>
                    <p class="capitalize text-[20px] font-medium text-white/27">{{ advisoryBoardItem.para }}</p>
                </div>
           </div>
        </section>
    </div>
</template>

<script setup>
const advisoryBoardList = [
    {
        id: 1,
        heading: 'JOSEPH YOUNG',
        para: 'Data'
    },
    {
        id: 2,
        heading: 'GARLAM WON',
        para: 'Marketing'
    },
    {
        id: 3,
        heading: 'ANTHONY POMPLIANO',
        para: 'Publicity'
    },
    {
        id: 4,
        heading: 'YIDA GAO',
        para: 'Talent/Capital Acquisition'
    },
    {
        id: 5,
        heading: 'COLE PETERSEN',
        para: 'DeFi'
    },
    {
        id: 6,
        heading: 'JUSTIN HARKEMA',
        para: 'Strategic'
    }
]
</script>