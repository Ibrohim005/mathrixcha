<template>
  <div class="home">
    <Header />
    <Button />
    <Input />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
export default {
  name: "Home",
  components: {
    Header, Button, Input
  },
};
</script>
