<template>
  <section id="project" class="px-4 py-8">
    <div class="gap-16 items-center lg:grid lg:grid-cols-2">
      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Das Projekt</h2>
        <p class="mb-4">
          Aktivierung und Deaktivierung von LED Stripes durch die Verwendung der Smart Home Technologie FHEM mittels Anwesenheitserkennung von mobilen Endgeräten und unter Beachtung des Lichteinfalls.
        </p>
        <p>Erweiterung des Projekts durch Einbeziehumg des Faktors Strom, d.h.</p>
        <ul class="max-w-md mb-6 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>Stromverbrauch messen</li>
          <li>aus Stromverbrauch CO2-Ausstoß berechnen</li>
        </ul>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1">
        <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectSection"
}
</script>

<style scoped>

</style>
