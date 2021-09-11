<template>
  <div class="home">
    <Header />
    <Entrance />

    <Button />
    <Input />
    <Label />



    <Learning />
    <Works :works="worksBoxes" :img="worksBoxes.img" :title="worksBoxes.title"/>
    <Join />
    <Slider />
    <Media />
    <Footer />

    <Modal />

    </div>
</template>


<script>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import Entrance from '../components/Entrance.vue'
import Label from '../components/Label.vue'
import Learning from '../components/Learning.vue'
import Footer from '../components/Footer.vue'
import Works from '../components/Works.vue'
import Join from '../components/Join.vue'
import Media from '../components/Media'
import Slider from '../components/Slider.vue'
import Modal from '../components/Modal.vue'

export default {
  name: "Home",
  components: {
    Header, Button, Input, Entrance, Label, Learning, Footer, Works, Join, Media, Slider, Modal
  },
  data() {
    return {
      worksBoxes: [
        {
          img: require('@/assets/img/boxes/1.png'),
          title: 'We have official professors'
        },
        {
          img: require('@/assets/img/boxes/2.png'),
          title: 'We have everything to understand course'
        },
        {
          img: require('@/assets/img/boxes/3.png'),
          title: 'We prepare you to the exam'
        }
      ]
    }
  }
};
</script>


<style lang="scss">

button:hover {
  transform: translate(2px, -2px);
}

img {
  pointer-events: none;
}

.section-title {
  color: #0F947F;
}

</style>