

<script>
export default {
  name: 'pharmacy',
  data(){
    return {
      email:'',
      password:'',
      user: undefined,
    }
  },
  created(){
   

  },

  methods: {
  }
}
</script>

<template>
  <div>
    <h2>pharmacy</h2>
    <p>hi {{$route.params.user.username}}</p>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
