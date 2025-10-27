<template>
    <div 
        :style="{'backgroundColor': '#021323'}"
    class="road-map w-screen relative">
        <section class="max-w-[1440px] mx-auto md:px-[73px]
                lg:py-50 py-20 flex flex-col lg:flex-row
            p-4 lg:relative">
                <div class="lg:w-1/2">
                    <h1
                        class="text-white lg:text-[40px] 
                            text-[30px] leading-[40px]
                        lg:leading-[54px] -tracking-[2%] font-semibold
                        mb-3
                        "
                    >Blackfyre roadmap! Here is our  Complete services</h1>
                    <p class="text-white/30 text-[24px] leading-[33px] font-medium -tracking-[2%]
                        mb-4
                    ">Airdrop to Whalemap's loyal users that have joined its journey over the past year</p>
                    <NuxtLink to="/nft">
                        <button class="lg:py-[21px]
                            py-[12px] px-[47px]
                        lg:px-[56px] leading-[32px] rounded-[10px] text-white uppercase bg-[#014C93]">
                            learn more
                        </button>
                    </NuxtLink>
                </div>
                <img src="/images/roadmap-hero-img.svg" alt="roadmap-hero-img" class="mt-10 lg:mt-0 lg:absolute lg:top-[15%] lg:right-0"/>
            </section>
        <img src="/images/road-map-hero-top-left-illus.svg" alt="road map hero illustration" class="absolute top-[10%] left-0" />
    </div>
</template>
<script setup>

</script>