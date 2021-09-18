<template>
    <div class="reg1 relative text-center">
      <div class="lg:container mx-auto px-5">
      <!-- bg-image -->
      <img class="absolute top-0 left-0 w-full -z-1" src="../assets/img/register/Registration_bg.png" alt="">
      <div class="header flex justify-around items-center pt-5">
        <div></div>

      <!-- title -->
      <h4 class="section__title">Let's get acquainted</h4>
      <!-- x-button -->
        <router-link to="Modal">
        <svg class="cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="17" fill="#DEF9F1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.5971 10.4358C23.1166 9.95582 22.3382 9.95582 21.8577 10.4358L17.1892 15.2933L12.1105 10.3701C11.7969 10.0495 11.3337 9.92492 10.9016 10.0449C10.4695 10.1648 10.1368 10.5103 10.0333 10.9466C9.92975 11.383 10.0717 11.8411 10.4039 12.1425L15.4498 17L10.4039 21.8575C10.0717 22.1589 9.92975 22.617 10.0333 23.0534C10.1368 23.4897 10.4695 23.8352 10.9016 23.9551C11.3337 24.0751 11.7969 23.9505 12.1105 23.6299L17.1892 18.7067L21.8577 23.5643C22.159 23.8964 22.6171 24.0384 23.0534 23.9349C23.4897 23.8313 23.8352 23.4986 23.9551 23.0665C24.0751 22.6343 23.9505 22.1712 23.6299 21.8575L18.9286 16.9344L23.6299 12.0112C24.0006 11.5469 23.9868 10.8841 23.5971 10.4358V10.4358Z" fill="#229A87"/>
        </svg>
        </router-link>
      </div>
      <!-- linie -->
        <svg class="mx-auto mt-4" width="1200" height="1" viewBox="0 0 1200 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line opacity="0.2" x1="4.37114e-08" y1="0.5" x2="1200" y2="0.500105" stroke="#36A593"/>
        </svg>

        <!-- progress view -->
        <div class="progress-text text-right mx-auto mt-4">
          <h6 class="section__subtitle">Step 1/4</h6>
        </div>

        <div class="progress  mt-4 flex justify-center w-full">
          <svg width="800" height="10" viewBox="0 0 800 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="10" rx="5" fill="#FDF6CF"/><path d="M0 0H195C197.761 0 200 2.23858 200 5V5C200 7.76142 197.761 10 195 10H0V0Z" fill="#F9ED35"/>
          </svg>
        </div>


        <!-- label and input -->
        <div class="form text-left mt-40 w-auto mx-auto">
        <label class="label" for="userName">Username</label> <br>
        <input type="text" class="input w-full" id="userName" placeholder="Username">
        </div>

        <!-- button -->
        <router-link to="register2">
        <button class="btn btn_xl mt-60">Next</button>
        </router-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Reg1'
  }
</script>

<style lang="scss" scoped>
  .reg1 {
    height: 100vh;
    .progress-text {
      width: 800px;
    }
    .form {
      width: 500px;
    }
  }

  
 @media  (max-width: 380px) {
  .reg1 {
    width: 100%;
    overflow: hidden !important;
  .form {
    width: 100%;
  }
  .progress-text {
        width: 100%;
      }
  }
   }
</style>