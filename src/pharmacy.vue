

<script>
export default {
  name: 'pharmacy',
  data(){
    return {
      prescriptions:[
        {
          name:'hajj1',
          age:57,
          gender:'m',
          drugs: [{
            drugName:'drugname',
            frequency:'od',
            duration:3,
            strength:'500m'
          }]
        },
        {
          name:'hajjy2',
          age:57,
          gender:'m',
          drugs: [{
            drugName:'drugname',
            frequency:'od',
            duration:3,
            strength:'500m'
          }]
        }
      ],
    }
  },
  created(){
   

  },

  methods: {
    to(patient){
      this.$router.push({ name: 'prescription',params:{patient} })
    }
  }
}
</script>

<template>
  <div>
    <h2>pharmacy</h2>
    <!-- <p>hi {{$route.params.user.username}}</p> -->
    <div  class="card" v-for ="p in prescriptions" v-on:click = 'to(p)'>
      <p>{{p.name}}</p>
      <p> age {{p.age}}</p>
      <p>{{p.gender}}</p>
    </div>
  </div>
</template>

<style>

.card {
display: flex;
background-color: #fff;
margin-bottom: 32px;
box-shadow: 0px 3px 3px rgba(43, 65, 65, 0.25);
}
.card p {
  padding: 16px;
}
</style>
