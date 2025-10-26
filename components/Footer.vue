<template>
    <div class="bg-[#091C2D] w-screen">
        <section class="max-w-[1440px] mx-auto md:px-[73px] px-4 py-10
            flex flex-col lg:flex-row lg:justify-between lg:items-center
        ">
            <h1 class="uppercase text-[24px] font-medium text-white/30
                mb-10 lg:mb-0
            ">blackfyre {{ new Date().getFullYear() }}</h1>
            <div class="flex flex-col gap-10 lg:flex-row mb-10 lg:mb-0">
                <p v-for="footerLink of footerLinks" :key="footerLink"
                    class="text-[#4A5864]"
                >
                    {{ footerLink }}
                </p>
            </div>
            <div class="flex gap-x-5">
                <img v-for="footerSocial of footerSocials" :key="footerSocial" 
                    :src="footerSocial" alt="footer-social"
                />
            </div>
        </section>
    </div>
</template>

<script setup>
const footerLinks = ['Company', 'Terms and Conditions', 'Privacy Policy', 'Cookie Policy', 'Contact Us']
const footerSocials = ['/images/icons/insta-50-icon.png','/images/icons/x-50-icon.png']
</script>