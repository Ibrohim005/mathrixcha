<template>
  <div class="reg2 relative text-center">
    <div class="lg:container mx-auto px-5">
      <!-- bg-image -->
      <img class="absolute top-0 left-0 w-full -z-1" src="../assets/img/register/Registration_bg.png" alt="">
      <!-- header -->
      <div class="header flex justify-around items-center pt-5">
        <!-- back-button -->
        <router-link to="register1">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="17" fill="#DEF9F1" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M14.6379 16.9958L20.5636 11.1891C20.9087 10.8739 21.0508 10.3993 20.934 9.95139C20.8173 9.50348 20.4604 9.15373 20.0033 9.03935C19.5462 8.92496 19.0619 9.06418 18.7403 9.40239L11 16.9874L12.9867 18.9342L18.7661 24.5976C19.0877 24.9358 19.572 25.075 20.0291 24.9607C20.4862 24.8463 20.8431 24.4965 20.9598 24.0486C21.0766 23.6007 20.9345 23.1261 20.5894 22.8109L14.6379 16.9958Z"
              fill="#229A87" />
          </svg>
        </router-link>

        <!-- title -->
        <h4 class="section__title">What grade and college are you in?</h4>
        <!-- x-button -->
        <router-link to="/">
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
        <h6 class="section__subtitle">Step 2/4</h6>
      </div>

      <div class="progress  mt-4 flex justify-center w-full">
        <svg width="800" height="10" viewBox="0 0 800 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="10" rx="5" fill="#FDF6CF" />
          <path d="M0 0H395C397.761 0 400 2.23858 400 5C400 7.76142 397.761 10 395 10H0V0Z" fill="#F9ED35" />
        </svg>

      </div>

      <!-- grades -->

      <div class="grades mx-auto  mt-4">
        <div class="text-left">
          <h4 class="section__title text-left">Choose the grade</h4>
        </div>

        <div class="flex flex-wrap mt-8 justify-center">
          <div class="grade flex justify-center items-center text-sm font-bold rounded mb-4">
            First
          </div>
          <div class="grade flex justify-center items-center text-sm font-bold rounded mb-4">
            Second
          </div>
          <div class="grade flex justify-center items-center text-sm font-bold rounded mb-4">
            3rd
          </div>
          <div class="grade flex justify-center items-center text-sm font-bold rounded mb-4">
            4th
          </div>
          
          <div class="grade flex justify-center items-center text-sm font-bold rounded mb-4">
            5th
          </div>
          <div class="grade flex justify-center items-center text-sm font-bold rounded mb-4">
            Terminal L
          </div>
          <div class="grade flex justify-center items-center text-sm font-bold rounded mb-4">
            Terminal ES
          </div>
          <div class="grade flex justify-center items-center text-sm font-bold rounded mb-4">
            Terminal S
          </div>
        </div>
      </div>


      <!-- input  -->

      <div class="mx-auto  mt-4 w-full">
        <div class="text-left">
          <h4 class="section__title text-left">Choose your college</h4>
        </div>
        <div class="relative">
          <input type="text" class="input w-full mt-5 pl-12" placeholder="Search your College">
          <div class="absolute top-9 left-4">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.1406 19.7457L14.7151 15.2648C17.8159 12.0886 17.9104 6.99 14.9295 3.69697C11.9485 0.403934 6.9491 0.0841182 3.58666 2.97136C0.224227 5.8586 -0.308993 10.9292 2.37688 14.4756C5.06275 18.022 10.0154 18.7868 13.6135 16.2107L18.1252 20.8037C18.4083 21.0722 18.8494 21.0643 19.1229 20.7858C19.3965 20.5073 19.4043 20.0582 19.1406 19.7701V19.7457ZM1.99972 9.33342C1.99972 5.46743 5.13372 2.33342 8.99972 2.33342C12.8657 2.33342 15.9997 5.46743 15.9997 9.33342C15.9997 13.1994 12.8657 16.3334 8.99972 16.3334C5.13372 16.3334 1.99972 13.1994 1.99972 9.33342Z" fill="#229A87"/><path d="M19.1406 19.7457H19.6406V19.5404L19.4963 19.3943L19.1406 19.7457ZM14.7151 15.2648L14.3573 14.9156L14.0143 15.2669L14.3593 15.6162L14.7151 15.2648ZM13.6135 16.2107L13.9702 15.8604L13.6704 15.5551L13.3224 15.8042L13.6135 16.2107ZM18.1252 20.8037L17.7685 21.1541L17.7747 21.1604L17.7811 21.1665L18.1252 20.8037ZM19.1406 19.7701H18.6406V19.9643L18.7717 20.1076L19.1406 19.7701ZM19.4963 19.3943L15.0708 14.9135L14.3593 15.6162L18.7848 20.097L19.4963 19.3943ZM15.0729 15.6141C18.3584 12.2487 18.4582 6.85008 15.3001 3.36142L14.5588 4.03252C17.3626 7.12993 17.2734 11.9286 14.3573 14.9156L15.0729 15.6141ZM15.3001 3.36142C12.138 -0.131807 6.82977 -0.472456 3.26093 2.59202L3.9124 3.3507C7.06843 0.640693 11.759 0.939676 14.5588 4.03252L15.3001 3.36142ZM3.26093 2.59202C-0.303211 5.65246 -0.866136 11.0217 1.97829 14.7774L2.77547 14.1737C0.24815 10.8366 0.751665 6.06474 3.9124 3.3507L3.26093 2.59202ZM1.97829 14.7774C4.82628 18.5379 10.0842 19.3524 13.9046 16.6173L13.3224 15.8042C9.94653 18.2211 5.29923 17.506 2.77547 14.1737L1.97829 14.7774ZM13.2568 16.5611L17.7685 21.1541L18.4819 20.4533L13.9702 15.8604L13.2568 16.5611ZM17.7811 21.1665C18.2622 21.6229 19.0151 21.609 19.4796 21.1362L18.7662 20.4354C18.6836 20.5196 18.5543 20.5216 18.4693 20.441L17.7811 21.1665ZM19.4796 21.1362C19.9397 20.6678 19.9524 19.9165 19.5094 19.4325L18.7717 20.1076C18.8562 20.1999 18.8534 20.3467 18.7662 20.4354L19.4796 21.1362ZM19.6406 19.7701V19.7457H18.6406V19.7701H19.6406ZM2.49972 9.33342C2.49972 5.74357 5.40987 2.83342 8.99972 2.83342V1.83342C4.85758 1.83342 1.49972 5.19128 1.49972 9.33342H2.49972ZM8.99972 2.83342C12.5896 2.83342 15.4997 5.74357 15.4997 9.33342H16.4997C16.4997 5.19128 13.1419 1.83342 8.99972 1.83342V2.83342ZM15.4997 9.33342C15.4997 12.9233 12.5896 15.8334 8.99972 15.8334V16.8334C13.1419 16.8334 16.4997 13.4756 16.4997 9.33342H15.4997ZM8.99972 15.8334C5.40987 15.8334 2.49972 12.9233 2.49972 9.33342H1.49972C1.49972 13.4756 4.85758 16.8334 8.99972 16.8334V15.8334Z" fill="#229A87"/>
            </svg>

          </div>
        </div>
      </div>

      <!-- button -->
      <router-link to="register3">
        <button class="btn btn_xl mt-20 mb-4">Next</button>
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
  .reg2 {
    height: 100vh;

    .progress-text {
      width: 800px;
    }

    .form {
      width: 500px;
    }
  }

  .grades {
    width: 746px;

    .section__title {
      color: #86C9BE;

    }

    .grade {
      width: 170px !important;
      height: 70px !important;
      box-shadow: 5px 0px 18px rgba(185, 213, 208, 0.4);
      color: #505857;
      font-family: Poppins;
      line-height: 18px;
      letter-spacing: -0.762769px;
      transition: .3s all ease-in-out;

      &:hover {
        background-color: #229A87;
        color: #fff;

      }
    }
  }

  @media  (max-width: 900px) {
  .reg2 {
    width: 100%;
    overflow: hidden !important;
    .progress-text {
      width: 100%;
    }
   }
   .section__title {
     font-size: 16px;
   }
   .grades {
     width: 100%;
   }
  }
</style>