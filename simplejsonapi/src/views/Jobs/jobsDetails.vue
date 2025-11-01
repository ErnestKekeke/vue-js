<template>

    <h4> Jobs Details </h4>
    
    <!-- <p>Selected job id: {{ $route.params.id }}</p> -->

    <div v-if="title">
          <h4> title: {{ title }} </h4>
    <p >Description: {{ desc }}</p>
    <p >Selected job id: {{ id }}</p>
    </div>

</template>


<script>
    export default{
        props: ['id'],
        // data(){
        //     return{
        //         id: this.$route.params.id,
        //     }
        // }

        data(){
          return{
            title: null,
            desc: null,
          }
        },

       async mounted(){
            console.log("on mounted !")
            try{
              const response = await fetch('http://localhost:3000/jobs/' + this.id);
              const data = await response.json();
              this.title = data.title;
              this.desc = data.desc;

            }catch(error){
              console.log(error);
            }
        }

    }


</script>


<style scoped>

</style>
