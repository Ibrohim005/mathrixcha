
<template>
    <div class="reg3 relative text-center">
      <div class="lg:container mx-auto px-3">
      <!-- bg-image -->
      <img class="absolute top-0 left-0 w-full -z-1" src="../assets/img/register/Registration_bg.png" alt="">
      <!-- header -->
      <div class="header flex justify-around items-center pt-5">
        <!-- back-button -->
        <router-link to="register2">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="17" fill="#DEF9F1" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M14.6379 16.9958L20.5636 11.1891C20.9087 10.8739 21.0508 10.3993 20.934 9.95139C20.8173 9.50348 20.4604 9.15373 20.0033 9.03935C19.5462 8.92496 19.0619 9.06418 18.7403 9.40239L11 16.9874L12.9867 18.9342L18.7661 24.5976C19.0877 24.9358 19.572 25.075 20.0291 24.9607C20.4862 24.8463 20.8431 24.4965 20.9598 24.0486C21.0766 23.6007 20.9345 23.1261 20.5894 22.8109L14.6379 16.9958Z"
              fill="#229A87" />
          </svg>
        </router-link>

        <!-- title -->
        <h4 class="section__title">In which subject do you need help?</h4>
        <!-- x-button -->
        <router-link to="Modal">
          <svg class="cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="17" fill="#DEF9F1" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M23.5971 10.4358C23.1166 9.95582 22.3382 9.95582 21.8577 10.4358L17.1892 15.2933L12.1105 10.3701C11.7969 10.0495 11.3337 9.92492 10.9016 10.0449C10.4695 10.1648 10.1368 10.5103 10.0333 10.9466C9.92975 11.383 10.0717 11.8411 10.4039 12.1425L15.4498 17L10.4039 21.8575C10.0717 22.1589 9.92975 22.617 10.0333 23.0534C10.1368 23.4897 10.4695 23.8352 10.9016 23.9551C11.3337 24.0751 11.7969 23.9505 12.1105 23.6299L17.1892 18.7067L21.8577 23.5643C22.159 23.8964 22.6171 24.0384 23.0534 23.9349C23.4897 23.8313 23.8352 23.4986 23.9551 23.0665C24.0751 22.6343 23.9505 22.1712 23.6299 21.8575L18.9286 16.9344L23.6299 12.0112C24.0006 11.5469 23.9868 10.8841 23.5971 10.4358V10.4358Z"
              fill="#229A87" />
          </svg>
        </router-link>
      </div>
      <!-- linie -->
      <svg class="mx-auto mt-4" width="1200" height="1" viewBox="0 0 1200 1" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <line opacity="0.2" x1="4.37114e-08" y1="0.5" x2="1200" y2="0.500105" stroke="#36A593" />
      </svg>

      <!-- progress view -->
      <div class="progress-text text-right mx-auto mt-4">
        <h6 class="section__subtitle">Step 3/4</h6>
      </div>

      <div class="progress  mt-4 flex justify-center w-full">
        <svg width="800" height="10" viewBox="0 0 800 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="10" rx="5" fill="#FDF6CF"/><path d="M0 0H595C597.761 0 600 2.23858 600 5C600 7.76142 597.761 10 595 10H0V0Z" fill="#F9ED35"/>
        </svg>
      </div>

      <div class="subjects mx-auto  mt-14">
        <div class="">
          <h4 class="section__title text-left">Choose the Subject</h4>
        </div>
        <div class="flex flex-wrap justify-left">
          <div class="subject text-center rounded flex flex-col justify-around items-center pb-5 pt-2 mr-6 mt-6 cursor-pointer" v-for="(subject,index) in subjects" :key="index">
            <img class="mx-auto w-36" :src="subject.img" alt="">
            <p style="letter-spacing: -0.149625px;" class="mt-3 text-base font-semibold">{{ subject.title }}</p>
          </div>  
        </div>
      </div>



      <!-- button -->
      <router-link to="register4">
        <button class="btn btn_xl mt-28  mb-4">Next</button>
      </router-link>

    </div>
  </div>
</template>


<script>
  export default {
    name: 'Reg3',
    
    data() {
      return{
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
  }
</script>

<style lang="scss" scoped>
  .reg3 {
    height: 100vh;

    .progress-text {
      width: 800px;
    }

    .form {
      width: 500px;
    }
  }

  .subjects {
    width: 1200px;

    .section__title {
      color: #86C9BE;

    }

    .subject {
      width: 264px;
      box-shadow: 5px 0px 30px rgba(185, 213, 208, 0.5);
      transition: all 0.3s;
      border: 2px solid #FFF;
      &:hover {

        border: 2px solid #229A87;
      }
    }

  }
</style>