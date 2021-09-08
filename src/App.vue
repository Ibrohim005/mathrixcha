<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "../src/views/Home.vue"
export default {
  name : "App",
  components: {
    Home
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.btn{
  cursor: pointer;
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
.label {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.0142658px;
  color: #282929;
}
.input {
  background: #FFFFFF;
  border: 1px solid #CBCDCD;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 16px 18px;
  outline: none;
  transition:all 0.3s;
  width: 350px;
  height: 56px;
  &:hover{
      border: 1px solid #505857;
  }
  &:focus{
      border: 2px solid #229A87;
  }
}
.select {
  outline: none;
  background: #FFFFFF;
  border: 1px solid #CBCDCD;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 16px 18px;
  width: 350px;
  height: 56px;
  &_sm{
    width: 150px;
    padding: 8px 22px;
    font-weight: 600;
  }
  &:hover {
      border: 1px solid #505857;
  }
  &:focus {
      border: 2px solid #229A87;
  }
  &:active {
      border: 2px solid #229A87;
  }
}
.select-block {
  position: relative;
}
.search {
    position: relative;
    display: flex;
    align-items: center;
    &__input {
        background: #229A87;
        border: none;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 16px 40px;
        outline: none;
        transition: all 0.3s;
        width: 350px;
        height: 56px;
        color: #FFF;
        &::placeholder {
            color: #FFFFFF;
        }
    }
    &__icon {
        position: absolute;
        left: 13px;
        z-index: 1;
    }
}
.textarea {
    opacity: 0.2;
    border: 1px solid #36A593;
    border-radius: 10px;
    outline: none;
    padding: 26px 18px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.149625px;
    color: #282929;
    &:hover {
        border: 1px solid #505857;
        opacity: 1;

    }
    &:active {
        border: 2px solid #229A87;
        opacity: 1;
        outline:none;
    }
    &:focus {
    border: 2px solid #229A87;
    opacity: 1;
    outline:none;
  }
}
</style>