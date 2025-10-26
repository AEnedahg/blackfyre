<template>
    <div class="bg-[#021323] w-screen relative">
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
                >Some detail about the Coin or Marketplace</h1>
                <p class="text-white/30 text-[24px] leading-[33px] font-medium -tracking-[2%]
                    mb-4
                ">The Cost of one Coin or other detail</p>
                <p class="text-white text-[24px] leading-[33px] font-semibold -tracking-[2%] mb-10">Connect to the Network</p>
                <NuxtLink to="/nft">
                    <button class="lg:py-[21px]
                        py-[12px] px-[47px]
                    lg:px-[56px] leading-[32px] rounded-[10px] text-white uppercase bg-[#014C93]">
                        connect
                    </button>
                </NuxtLink>
            </div>
            <img src="/images/nft-hero-img.svg" alt="nft-hero-img" class="mt-10 lg:mt-0 lg:absolute lg:top-[15%] lg:right-0"/>
        </section>
        <img src="/images/nft-oval-left.svg" alt="nft-oval-left" class="absolute bottom-[10%] left-0"/>
        <img src="/images/nft-oval-right.svg" alt="nft-oval-right" class="absolute bottom-[10%] right-0"/>
    </div>
</template>

<script setup>

</script>