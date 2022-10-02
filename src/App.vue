<script setup>
import Header from './components/Header.vue';
import Banner from './components/Banner.vue';
import WhyUs from './components/WhyUs.vue';
import OurServices from './components/OurServices.vue';
import ContactUs from './components/ContactUs.vue';
import AboutUs from './components/AboutUs.vue';
</script>

<template>
  <Header></Header>
  <main>
    <Banner></Banner>
    <AboutUs></AboutUs>
    <WhyUs></WhyUs>
    <OurServices></OurServices>
    <ContactUs></ContactUs>
  </main>
</template>
