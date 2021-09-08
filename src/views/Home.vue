<template>
  <div class="home">
    <Header />
    <Slider />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue';
export default {
  name: "Home",
  components: {
    Header,
    Slider
  },
};
</script>
