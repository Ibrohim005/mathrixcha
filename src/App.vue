<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
.button{
  cursor: pointer;
  padding: 15px 114px;
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
    padding: 12px 45px;
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
    padding: 11px 63px;
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
