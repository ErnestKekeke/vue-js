<template>

    <h2>Jobs</h2>

    <p v-for="job in jobs" :key="job.id" > 
        <!-- Title: {{ job.title }} Description: {{ job.desc }} -->

           <RouterLink :to="{name: 'jobDetails', params: {id: job.id} }"> 
            Title: {{ job.title }} Description: {{ job.desc }} </RouterLink> 

           <!-- <router-link :to="{name: 'jobDetails', params: {id: jobs.id} }"> 
            Title: {{ job.title }} Description: {{ job.desc }} </router-link> -->
    
    </p>
    
</template>


<script>
    export default{
        data(){
            return{
                jobs: [
                    {title: 'JavaScript', desc: "JavaScript's Programming !", id: 1},
                    {title: 'Python', desc: 'Python Programming !', id: 2},
                    {title: 'C++', desc: 'C++ Programming !', id: 3}
                ]
            }
        }
    }
</script>


<style scoped>

</style>
