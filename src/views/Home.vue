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

import Reg1 from '../components/Reg1.vue'

export default {
  name: "Home",
  components: {
    Header, Button, Input, Entrance, Label, Learning, Footer, Works, Join, Media, Slider,  Reg1
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
      ],
      subjects: [
        {
          img:require('@/assets/img/subjects/1.png'),
          title: 'Mathematics'
        },
        {
          img:require('@/assets/img/subjects/2.png'),
          title: 'Physical'
        },
        {
          img:require('@/assets/img/subjects/3.png'),
          title: 'SVT'
        },
        {
          img:require('@/assets/img/subjects/4.png'),
          title: 'History'
        },
        {
          img:require('@/assets/img/subjects/5.png'),
          title: 'Chemistry'
        },
        {
          img:require('@/assets/img/subjects/6.png'),
          title: 'Numeric Science'
        },
        {
          img:require('@/assets/img/subjects/7.png'),
          title: 'Technology'
        },
        {
          img:require('@/assets/img/subjects/8.png'),
          title: 'Philosophy'
        },
        {
          img:require('@/assets/img/subjects/9.png'),
          title: 'Geographi'
        },
        {
          img:require('@/assets/img/subjects/10.png'),
          title: 'French'
        },
      ]
    }
  }
};
</script>


<style lang="scss">


img {
  pointer-events: none;
}

.section-title {
  color: #0F947F;
}

</style>