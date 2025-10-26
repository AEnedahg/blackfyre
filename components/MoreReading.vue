<template>
    <div class="bg-[#021323] w-screen">
        <section class="md:h-[500px] h-[650px] lg:px-[178px] px-4 max-w-[1440px] mx-auto md:px-20">
             <h1 class="lg:text-[48px] 
                text-[24px] capitalize text-center
            font-bold text-white font-inter
            leading-[28px]
            lg:leading-[54px] -tracking-[2%] mb-10">
                more reading
            </h1>
            <div class="flex md:flex-row flex-col gap-[26px] md:justify-center">
                <div v-for="reading of moreReading" :key="reading.id"
                    class="bg-[#0C2F50] rounded-[10px] flex flex-col items-center justify-center mx-auto md:mx-0 w-[240px] h-[264px] gap-5"
                >
                    <img :src="reading.src" :alt="reading.alt" />
                    <p class="text-[#FDFDFD] text-center text-[24px]">{{ reading.text }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const moreReading = [
    {
        id: 1,
        src: '/images/more-reading-icon-one.svg',
        alt: 'more-reading-icon-one',
        text: 'Air Drop'
    },
    {
        id: 2,
        src: '/images/more-reading-icon-two.svg',
        alt: 'more-reading-icon-two',
        text: 'WPM & XWMP'
    }
]
</script>