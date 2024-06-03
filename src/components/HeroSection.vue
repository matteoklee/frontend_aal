<template>
  <section id="home" class="bg-white dark:bg-gray-900 pt-4">
    <div class="max-w-screen-xl grid py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="mb-4 text-4xl text-red-600 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Intelligente Beleuchtung
        </h1>
        <p class="mb-2 font-extrabold text-gray-900 lg:mb-2 md:text-lg lg:text-xl dark:text-gray-400">
          Anwendungspraktikum Ambient Assisted Living
        </p>
        <p class="mb-4 font-light text-gray-500 lg:mb-4 md:text-lg lg:text-xl dark:text-gray-400">
          Umsetzung eines Projekts zur Nutzung von Smart Home Technologien.
        </p>
        <h2 class="mb-2 md:text-lg lg:text-xl font-extrabold text-gray-900">Projektteam:</h2>
        <ul class="mb-6 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>Matteo Kleemann, u37186</li>
          <li>Marcel Gerber, u37494</li>
        </ul>


        <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Das Projekt
          <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Überwachung
        </a>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
          <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
          <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
          <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <!-- <img src="../assets/10.PNG" class="dark:hidden w-[272px] h-[572px]" alt=""> -->
            <iframe src="http://localhost:8083/fhem?room=Unsorted" title="W3Schools Free Online Web Tutorials" class="w-[272px] h-[572px]"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "HeroSection"
}
</script>

<style scoped>

</style>
