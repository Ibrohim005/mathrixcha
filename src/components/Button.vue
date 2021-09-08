<template>
    <div class="buttons">
<!--    <button class="btn cursor-pointer ">normal</button>
        <button class="btn btn_secondary">awoi</button>
        <button class="btn btn_revice">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="url(#paint0_linear)"/>
                <path d="M19.421 14.0347C19.1 14.0133 18.8218 14.2699 18.8004 14.612C18.7149 16.9425 16.8104 18.7813 14.478 18.7813C12.1028 18.7813 10.1555 16.8356 10.1555 14.4623C10.1555 12.089 12.1028 10.1433 14.478 10.1433C15.1199 10.1433 15.7191 10.2716 16.2754 10.5496L14.585 11.1696C14.2854 11.2765 14.1142 11.6186 14.2426 11.9394C14.3282 12.1745 14.5636 12.3242 14.799 12.3242C14.8631 12.3242 14.9273 12.3028 15.0129 12.2814L18.0515 11.1696C18.2013 11.1055 18.3083 10.9986 18.3939 10.8703C18.4581 10.7206 18.4581 10.571 18.4153 10.4213L17.3026 7.38519C17.1956 7.08586 16.8532 6.91481 16.5322 7.04309C16.2326 7.15 16.0615 7.4921 16.1898 7.81281L16.8318 9.52329C16.1043 9.1812 15.3125 9.01015 14.4994 9.01015C11.4608 9.01015 9 11.469 9 14.5051C9 17.5412 11.4608 20 14.4994 20C17.4737 20 19.8918 17.6695 19.9988 14.6975C20.0202 14.3126 19.7634 14.0347 19.421 14.0347Z" fill="white" stroke="white" stroke-width="0.333333"/>
                <defs>
                <linearGradient id="paint0_linear" x1="28" y1="-11" x2="2.5" y2="31.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9ECCFF"/>
                <stop offset="1" stop-color="#4692E8"/>
                </linearGradient>
                </defs>
            </svg>
            To revise again
        </button>
        <button class="btn btn_checked">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14.0002" r="14" fill="url(#paint0_linear)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8182 9.20807C19.5756 8.93097 19.1825 8.93097 18.9398 9.20807L12.7495 16.2859L9.04522 12.0506C8.80034 11.7897 8.41872 11.7974 8.18204 12.068C7.94535 12.3386 7.93862 12.7749 8.16681 13.0549L12.3103 17.7924C12.5529 18.0695 12.946 18.0695 13.1887 17.7924L19.8182 10.2124C20.0606 9.93497 20.0606 9.48551 19.8182 9.20807Z" fill="white" stroke="white" stroke-width="0.5"/>
                <defs>
                <linearGradient id="paint0_linear" x1="28" y1="-10.9998" x2="2.5" y2="31.5002" gradientUnits="userSpaceOnUse">
                <stop stop-color="#95F2CD"/>
                <stop offset="1" stop-color="#3FD199"/>
                </linearGradient>
                </defs>
            </svg>
            checked
        </button> -->
    </div>
</template>

<style lang="scss">
 .btn{
  cursor: pointer;
  padding: 15px 30px 16px 31px;
  width: 280px;
  height: 50px;
  background: #F9ED35;
  border-radius: 10px;
  border: 1px solid #F9ED35;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.0142658px;
  color: #282929;
  transition: all 0.3s;
  &:hover{
    background: #F4DC00;
    border: 1px solid #F4DC00;
  }
  &:focus{
    border: 1px solid #282929;
  }
  &_secondary{
    border: 1px solid #229A87;
    color: #229A87;
    background: transparent;
    &:hover{
      background: #DEF9F1;
      border: 1px solid #229A87;
    }
    &:focus{
      border: 2px solid #229A87;
    }
  }
  &_revice{
    border: 1px solid #F2F8FC;
    color: #5F97F0;
    background: #F2F8FC;
    width: 208px;
    svg{
      margin-right: 6px;
    }
    &:hover{
      border: 1px solid #5F97F0;
      background: #F2F8FC;
    }
    &:focus{
      border: 1px solid #5F97F0;
      background: #F2F8FC;
    }
  }
  &_checked{
    border: 1px solid #EFFFFA;
    color: #3CCF97;
    background: #EFFFFA;
    width: 208px;
    svg{
      margin-right: 6px;
    }
    &:hover{
      border: 1px solid #3CCF97;
      background: #EFFFFA;
    }
    &:focus{
      border: 1px solid #3CCF97;
      background: #EFFFFA;
    }
  }
}
.link{
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: -0.149625px;
  text-decoration-line: underline;
  color: #229A87;
  &:hover{
    color: #EFE21D;
  }
  .active{
    color: #EFE21D;
  }
}
</style>