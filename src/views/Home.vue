<template>
  <div class="home">
    <Header />
    <Button />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
export default {
  name: "Home",
  components: {
    Header, Button
  },
};
</script>
