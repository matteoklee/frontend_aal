<template>
  <div class="max-w-screen-xl mx-auto">
    <Header></Header>
    <div class="flex flex-col justify-center items-center">
      <HeroSection></HeroSection>
      <ProjectSection></ProjectSection>
      <StatusSection></StatusSection>
    </div>
    <Footer></Footer>

  </div>
</template>

<script>
import Template from "./components/Template.vue";
import Header from "./components/Header.vue";
import HeroSection from "./components/HeroSection.vue";
import ProjectSection from "./components/ProjectSection.vue";
import StatusSection from "./components/StatusSection.vue";
import Footer from "./components/Footer.vue";

import {initFlowbite} from "flowbite";
export default {
  name: "App",
  components: {Footer, StatusSection, ProjectSection, HeroSection, Header, Template},
  mounted() {
    initFlowbite();
  }
}
</script>

<style scoped>

</style>
