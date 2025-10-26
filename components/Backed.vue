<template>
    <div class="bg-[#021323] w-screen">
        <section class="max-w-[1440px] mx-auto md:px-[73px] p-4
            lg:pt-40
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
            <div class="
                grid grid-cols-1 grid-rows-7 md:grid-cols-4 md:grid-rows-2 gap-y-10
                mt-15
            ">
                <img v-for="backedOneItem of backedOne" :key="backedOneItem.id"
                    :src="backedOneItem.src" :alt="backedOneItem.alt"
                    class="col-span-1 row-span-1 md:col-span-1 md:row-span-1 mx-auto"
                />
            </div>
            <hr class="text-white my-10" />
            <div class="
                grid grid-cols-1 grid-rows-7 md:grid-cols-3 md:grid-rows-3 gap-y-10
                mt-15
            ">
                <div v-for="backedTwoItem of backedTwo" :key="backedTwoItem.id"
                    class="flex"
                >
                    <img
                        :src="backedTwoItem.src" :alt="backedTwoItem.alt"
                        class="col-span-1 row-span-1 md:col-span-1 md:row-span-1 mx-auto"
                    />
                    <div class="space-y-2">
                        <h4 class="text-[18px] font-bold text-white uppercase">{{ backedTwoItem.textOne }}</h4>
                        <p class="text-base font-medium text-white/27 capitalize">{{ backedTwoItem.textTwo }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const backedOne = [
    {
        id: 1,
        src: '/images/backed-one-one.svg',
        alt: 'backed-one-one'
    },
     {
        id: 2,
        src: '/images/backed-one-two.svg',
        alt: 'backed-one-two'
    },
     {
        id: 3,
        src: '/images/backed-one-three.svg',
        alt: 'backed-one-three'
    },
     {
        id: 4,
        src: '/images/backed-one-four.svg',
        alt: 'backed-one-four'
    },
     {
        id: 5,
        src: '/images/backed-one-five.svg',
        alt: 'backed-one-five'
    },
     {
        id: 6,
        src: '/images/backed-one-six.svg',
        alt: 'backed-one-six'
    },
     {
        id: 7,
        src: '/images/backed-one-seven.svg',
        alt: 'backed-one-seven'
    },
]
const backedTwo = [
    {
        id: 1,
        src: '/images/backed-two-one.svg',
        alt: 'backed-two-one',
        textOne: 'Anthony pompliano',
        textTwo: 'Entrepreneur'
    },
     {
        id: 2,
        src: '/images/backed-two-two.svg',
        alt: 'backed-two-two',
        textOne: 'Justin Harkerma',
        textTwo: 'Rarestone Capital'
    },
     {
        id: 3,
        src: '/images/backed-two-three.svg',
        alt: 'backed-two-three',
        textOne: 'PRIMO INVESTMENT',
        textTwo: ''
    },
     {
        id: 4,
        src: '/images/backed-two-four.svg',
        alt: 'backed-two-four',
        textOne: 'THANHALI',
        textTwo: 'coin98'
    },
     {
        id: 5,
        src: '/images/backed-two-five.svg',
        alt: 'backed-two-five',
        textOne: 'Anthony pompliano',
        textTwo: 'Entrepreneur'
    },
     {
        id: 6,
        src: '/images/backed-two-six.svg',
        alt: 'backed-two-six',
        textOne: 'Justin Harkerma',
        textTwo: 'Rarestone Capital'
    },
     {
        id: 7,
        src: '/images/backed-two-seven.svg',
        alt: 'backed-two-seven',
        textOne: 'Anthony pompliano',
        textTwo: 'Entrepreneur'
    },
]
</script>