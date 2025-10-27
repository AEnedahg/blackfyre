<template>
  <div class="bg-[#021323] w-screen relative">
    <section class="max-w-[1440px] mx-auto md:px-[73px] p-4 pb-[90px]">
      <h1
        class="sm:text-[48px] text-[24px] capitalize font-medium text-white font-inter
               leading-[28px] lg:leading-[54px] -tracking-[2%] mb-10 text-center md:text-left"
      >
        Complete RoadMap
      </h1>

      <div class="flex flex-col gap-y-16">
        <div
          v-for="step in steps"
          :key="step.id"
          :class="[
            'flex items-center gap-7',
            step.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
          ]"
        >
          <div class="relative">
            <img :src="step.oval" alt="oval-for-step" />
            <h2
              class="font-semibold text-sm sm:text-[36px] -tracking-[2%] uppercase text-white
                     absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              {{ step.step }}
            </h2>
          </div>

          <div class="flex flex-col items-start md:max-w-[600px]">
            <ul class="list-disc marker:text-white
                max-w-[360px] mx-auto block
            ">
              <li class="text-white/60 text-[14px] sm:text-[24px] sm:leading-[36px]
              ">
                {{ step.text }}
              </li>
            </ul>
            <img :src="step.line" alt="step-line" class="sm:mt-6 mt-1" />
          </div>
        </div>
      </div>
    </section>

    <img
      src="/images/complete-roadmap-underline.svg"
      alt="complete-roadmap-underline"
      class="absolute left-0 top-[7%] md:top-[4%]"
    />
    <img
      src="/images/complete-roadmap-oval.svg"
      alt="complete-roadmap-oval"
      class="absolute left-0 -top-[20%] md:-top-[10%] md:w-[230px] w-[130px]"
    />
  </div>
</template>

<script setup>
const steps = [
  {
    id: 1,
    step: 'Step-1',
    text: 'Generate first proofs of concept and initial funding',
    oval: '/images/step-oval.svg',
    line: '/images/step-line-one.svg'
  },
  {
    id: 2,
    step: 'Step-2',
    text: 'Launch MVP version and onboard early adopters',
    oval: '/images/step-oval.svg',
    line: '/images/step-line-two.svg'
  },
  {
    id: 3,
    step: 'Step-3',
    text: 'Expand to new blockchains and optimize analytics',
    oval: '/images/step-oval.svg',
    line: '/images/step-line-one.svg'
  },
  {
    id: 4,
    step: 'Step-4',
    text: 'Build partnerships and scale user adoption globally',
    oval: '/images/step-oval.svg',
    line: '/images/step-line-two.svg'
  }
]
</script>
