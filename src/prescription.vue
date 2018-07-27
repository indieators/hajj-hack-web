

<script>
export default {
  name: 'prescription',
  
  created(){
   
    

  },
computed: {
  
},
  methods: {
   clcCount(frequency,duration) {
    if(frequency === 'od') {
      return duration
    }
    else if(frequency === 'td' ) {
      return 2 * duration
    }
  },
  }
}
</script>

<template>
  <div>
    <h2>prescription</h2>
    <div>
      <div class="card" >
      <p>{{this.$route.params.patient.name}}</p>
      <p> age {{this.$route.params.patient.age}}</p>
      <p>{{this.$route.params.patient.gender}}</p>
      </div>
      <div class="card" v-for="d in this.$route.params.patient.drugs">
        <p>drug name: {{d.name}} </p>
        <p>drug frequency: {{d.frequency}} </p>
        <p>drug duration: {{d.duration}} </p>
        <p>drug strength: {{d.strength}} </p>
        <p>count: {{clcCount(d.frequency,d.duration)}} </p>
      </div>
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
