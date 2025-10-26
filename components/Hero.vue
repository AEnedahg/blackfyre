<template>
    <div class="bg-[#021323] h-[550px] relative w-screen">
        <section class="max-w-[1440px] mx-auto flex flex-col items-center">
            <h1 class="lg:text-[48px] 
                text-[24px] capitalize
            font-bold text-white text-center font-inter
                max-w-2/3 mt-[90px] leading-[28px]
            lg:max-w-1/2 lg:mt-[108px] lg:leading-[54px] -tracking-[2%]">
                Democratising data using blockchains
            </h1>
            <p
                class="lg:leading-[24px] 
                    leading-[20px] mt-[20px] max-w-2/3
                text-base font-inter text-[#DDE2FF] lg:mt-[28px] mb-[34px] lg:max-w-1/4 text-center"
            >Whalemap's analytics tools provide users with precise, actionable and timely blockchain data.</p>
            <div class="flex lg:gap-x-[51px] lg:flex-row flex-col gap-y-[12px]">
                <NuxtLink to="/">
                    <button class="lg:py-[21px]
                        py-[12px] px-[47px]
                    lg:px-[56px] leading-[32px] rounded-[10px] text-white uppercase bg-[#014C93]">
                        Go to Charts
                    </button>
                </NuxtLink>
                <NuxtLink to="/">
                    <button class="lg:py-[21px]
                        py-[12px] px-[47px]
                    lg:px-[56px] leading-[32px] rounded-[10px] text-white uppercase bg-[#17A6CE] inline-flex items-center gap-x-2">
                        <img src="public/images/icons/x-icon.png" alt="x-icon" class="h-5"/>
                        follow us
                    </button>
                </NuxtLink>
            </div>
        </section>
        <img src="/images/hero-oval.svg" alt="hero-oval-one" 
            class="absolute top-0 left-0"
        />
        <img src="/images/hero-oval-two.svg" alt="hero-oval-two" 
            class="absolute bottom-0 right-0"
        />
    </div>
</template>


<script setup>

</script>