<template>
  <div class="reg4 relative text-center">
    <div class="lg:container mx-auto px-5">
      <!-- bg-image -->
      <img class="absolute top-0 left-0 w-full -z-1" src="../assets/img/register/Registration_bg.png" alt="">
      <!-- header -->
      <div class="header flex justify-around items-center pt-5">
        <!-- back-button -->
        <router-link to="register3">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="17" fill="#DEF9F1" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M14.6379 16.9958L20.5636 11.1891C20.9087 10.8739 21.0508 10.3993 20.934 9.95139C20.8173 9.50348 20.4604 9.15373 20.0033 9.03935C19.5462 8.92496 19.0619 9.06418 18.7403 9.40239L11 16.9874L12.9867 18.9342L18.7661 24.5976C19.0877 24.9358 19.572 25.075 20.0291 24.9607C20.4862 24.8463 20.8431 24.4965 20.9598 24.0486C21.0766 23.6007 20.9345 23.1261 20.5894 22.8109L14.6379 16.9958Z"
              fill="#229A87" />
          </svg>
        </router-link>

        <!-- title -->
        <h4 class="section__title">Give us more information about yourself</h4>
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
        <h6 class="section__subtitle">Step 4/4</h6>
      </div>

      <div class="progress  mt-4 flex justify-center w-full">
        <svg width="800" height="10" viewBox="0 0 800 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="10" rx="5" fill="#F9ED35" />
        </svg>
      </div>

      <div class="subjects mx-auto  mt-14">
        <div class="">
          <h4 class="section__title text-left">Select your average grade at school</h4>
        </div>

        <!-- range 1 -->

      <div class="mx-auto">
        <div class="range relative">
          <svg class="levels-icon-1 absolute z-10" width="667" height="22" viewBox="0 0 667 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.5" x2="0.499999" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="37.5" y1="0.5" x2="37.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="74.5" y1="0.5" x2="74.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="111.5" y1="0.5" x2="111.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="148.5" y1="0.5" x2="148.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="185.5" y1="0.5" x2="185.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="222.5" y1="0.5" x2="222.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="259.5" y1="0.5" x2="259.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="296.5" y1="0.5" x2="296.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="333.5" y1="0.5" x2="333.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="370.5" y1="0.5" x2="370.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="407.5" y1="0.5" x2="407.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="444.5" y1="0.5" x2="444.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="481.5" y1="0.5" x2="481.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="518.5" y1="0.5" x2="518.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="555.5" y1="0.5" x2="555.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="592.5" y1="0.5" x2="592.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="629.5" y1="0.5" x2="629.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
<line x1="666.5" y1="0.5" x2="666.5" y2="21.5" stroke="#D7EDE9" stroke-linecap="round"/>
          </svg>

          <div class="sliderValue">
            <span>11</span>
          </div>
          <div class="field flex items-center justify-center">
            <div class="value left">
              <svg class="cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="16" fill="white" stroke="#D7EDE9" stroke-width="2"/><rect x="9" y="16" width="16" height="2" rx="1" fill="#229A87"/>
              </svg>
            </div>
            <input class="ml-5" type="range" min="1" max="20" value="11" steps="1">
            <div class="value right">
              <svg class="cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="16" fill="white" stroke="#D7EDE9" stroke-width="2"/><rect x="9" y="16" width="16" height="2" rx="1" fill="#229A87"/><rect x="16" y="25" width="16" height="2" rx="1" transform="rotate(-90 16 25)" fill="#229A87"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      

      

      <div class="subjects mx-auto  mt-14">
        <div class="">
          <h4 class="section__title text-left">Do you consider yourself as </h4>
        </div>
      </div>


      <!-- range 2 -->

      <div class="mx-auto mt-2">
        <div class="range relative">
          <div class="sliderValue">
            <span>11</span>
          </div>
          <div class="field flex items-center justify-center">
            <div class="value left">
              <svg class="cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="16" fill="white" stroke="#D7EDE9" stroke-width="2"/><rect x="9" y="16" width="16" height="2" rx="1" fill="#229A87"/>
              </svg>
            </div>
            <input class="ml-5" type="range" min="1" max="5" value="3" steps="1">
            <div class="value right">
              <svg class="cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="16" fill="white" stroke="#D7EDE9" stroke-width="2"/><rect x="9" y="16" width="16" height="2" rx="1" fill="#229A87"/><rect x="16" y="25" width="16" height="2" rx="1" transform="rotate(-90 16 25)" fill="#229A87"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>

      <!-- button -->
      <router-link to="/">
        <button class="btn btn_xl mt-28  mb-4">Finish</button>
      </router-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Reg4',

    data() {
      return {
        
      }
    }
  }

  // range 

  // const slideValue = document.querySelector("span");
  //     const inputSlider = document.querySelector("input");
  //     inputSlider.oninput = (()=>{
  //       let value = inputSlider.value;
  //       slideValue.textContent = value;
  //       slideValue.style.left = (value/2) + "%";
  //       slideValue.classList.add("show");
  //     });
  //     inputSlider.onblur = (()=>{
  //       slideValue.classList.remove("show");
  //     });


</script>

<style lang="scss" scoped>
  .reg4 {
    height: 100vh;

    .progress-text {
      width: 800px;
    }

    .form {
      width: 500px;
    }
  }

  .subjects {
    width: 800px;

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

  // range ---->

  .range{
  
  height: 80px;
  background: #fff;
  padding: 0 65px 0 45px;
 
}
.sliderValue{
  position: relative;
  width: 100%;
}
.sliderValue span{
  position: absolute;
  height: 45px;
  width: 45px;
  transform: translateX(-70%) scale(0);
  font-weight: 500;
  top: -40px;
  line-height: 55px;
  z-index: 2;
  color: #fff;
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
}
.sliderValue span.show{
  transform: translateX(-70%) scale(1);
}
.sliderValue span:after{
  position: absolute;
  content: '';
  height: 100%;
  width: 100%;
  background: #664AFF;
  border: 3px solid #fff;
  z-index: -1;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-bottom-left-radius: 50%;
  
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}
.field{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}
.field .value{
  position: absolute;
  font-size: 18px;
  color: #664AFF;
  font-weight: 600;
}
.field .value.left{
  left: -22px;
}
.field .value.right{
  right: -43px;
}
.range input{
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  background: #d7EDE9;
  border-radius: 100px;
  outline: none;
  border: none;
  z-index: 2222;
}
.range input::-webkit-slider-thumb{
  -webkit-appearance: none;
    width: 35px;
    height: 35px;
  background: red;
  border-radius: 50%;
  background: #229A87;
  border: 10px solid #FFF;
  box-shadow: 5px 0px 30px rgba(185, 213, 208, 0.5);
  cursor: pointer;
}
.range input::-moz-range-thumb{
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  background: #664AFF;
  border: 1px solid #664AFF;
  cursor: pointer;
}

.levels-icon-1 {
  right: 66px;
  top: 29px;
}

 @media  (max-width: 900px) {
  .reg4 {
    width: 100%;
    overflow: hidden !important;
    .progress-text {
      width: 100%;
    }
    .levels-icon-1 {
      display: none;
    }
   }
   .section__title {
     font-size: 16px;
   }
   .grades {
     width: 100%;
   }
   .subjects {
     width: 100%;
    
   }
  }


</style>