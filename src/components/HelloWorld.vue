<template>
  <div class="hello">
      <ul class="menu" >
        <router-link to="red" style="background: red" tag="li">red</router-link>
        <router-link to="yellow" tag="li" style="background: yellow">yellow</router-link>
        <router-link to="blue" tag="li" style="background: blue">blue</router-link>
        <router-link to="gold" tag="li" style="background: gold">gold</router-link>
        <router-link to="green" tag="li" style="border: 0;background:green;">green</router-link>
      </ul>
      <div class="content" style="border-left:none ">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .hello{
    display: flex;
    width: 550px;
    height:300px;
    margin-left: 500px;
    /*border:1px solid #ccc;*/
    /*background: red;*/

    .menu{
      display: flex;
      flex-direction: column;
      width: 150px;
      height:100%;
      border: 1px solid #ccc;
      li{
        list-style: none;
        flex-grow: 1;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        cursor: pointer;
      }
    }
    .content{
      border: 1px solid #ccc;
      width: 100%;
      height:100%;
      /*background: red;*/
        &>div{
          text-align: center;
          /*margin-top: 150px;*/
          line-height: 300px;
        }
    }
  }
</style>
