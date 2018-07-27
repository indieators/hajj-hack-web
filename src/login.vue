

<script>
// test
export default {
  name: 'login',
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
    login(){
      const {email,password} = this
      if(email ==='user@hack.code',password ==='123'){
       const user = {id:'121qwsaxsx',username:'just-user',email:'user@hack.code'}
        this.$router.push({ name: 'pharmacy',params:{user} })
      }
      
      
    },
  }
}
</script>

<template>
  <div>
    <h2>login</h2>
    <div>
      <p>email</p>
      <input v-model="email" />
    </div>
     <div>
      <p>password</p>
      <input type="password" v-model="password" />
    </div>
    <p v-if ='user'>welcome {{ user.email}}</p>
    <button  v-on:click ='login()'>login</button>
    
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
