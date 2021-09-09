<template>
  <div class="home">
    <Header />
    <Entrance />



    <Button />
    <Input />
    <Label />

    </div>
</template>
<style lang="scss">
img{
  pointer-events: none;
}
</style>
<script>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import Entrance from '../components/Entrance.vue'
import Label from '../components/Label.vue'

export default {
  name: "Home",
  components: {
    Header, Button, Input, Entrance, Label
  },
};
</script>
