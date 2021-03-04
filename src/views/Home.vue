<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      api: process.env.VUE_APP_API
    }
  },
  mounted() {
    // js代码中使用环境变量
    console.log(process.env)
    console.log('environmental : ', process.env.NODE_ENV)
    console.log('VUE_APP_API: ', process.env.VUE_APP_SERVER_URL)
  }
}
</script>
