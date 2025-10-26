<template>
     <div class="bg-[#021323] w-screen">
        <section class="max-w-[1440px] mx-auto md:px-[73px]
            lg:py-50 py-20 flex flex-col lg:flex-row
        p-4">
            <div class="border border-white/30 border-1 py-30 flex flex-col items-center 
                rounded-[20px] px-4
            *:text-center">
                <h4 class="text-[28px] text-white font-semibold -tracking-[2%]">Explore</h4>
                <img src="/images/bitcoin.svg" alt="bitcoin" 
                    class="mt-[38px] mb-[34px]"
                />
                <h4 class="capitalize text-white/30 text-[24px] font-bold -tracking-[2%]
                    mb-[10px]
                ">Get  a taste of on-chain data</h4>
                <p class="text-white/30 text-[18px] leading-[33px] font-medium -tracking-[2%]
                    mb-[80px] capitalize
                ">Idea for a fisrt dive up to daily 
                    resolution macro charts in demo
                    mode
                </p>
                <h3 class="text-[40px] text-white font-semibold -tracking-[2%] mb-[32px]">$10</h3>
                <h3 class="capitalize font-medium text-[28px] -tracking-[2%] text-white mb-[22px]">Per month</h3>
                <NuxtLink to="/pricing">
                    <button class="lg:py-[21px]
                        py-[12px] px-[47px]
                    lg:px-[56px] leading-[32px] rounded-[10px] text-white uppercase bg-[#014C93]">
                        buy standard
                    </button>
                </NuxtLink>
            </div>
            <img src="/images/pricing-hero-img.svg" alt="pricing-hero-img" 
                class="mt-10 lg:mt-0"
            />
        </section>
    </div>
</template>

<script setup>

</script>