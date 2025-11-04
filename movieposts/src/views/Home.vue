<template>

<h2>Welcome to our Movies posts</h2>

<div v-for="(movie, index) in movies" :key="movie.id" class="movies" >
  <RouterLink :to="{
                      name:'movieDetails', 
                      params: {id: movie.id},
                      query: { moviesLength: moviesLength, movieIndex: index } 
                    }">  
      <Movie :movie="movie"/> 
  </RouterLink>
</div>

<div class="space"></div>

</template>


<script>
import { ref, onMounted } from 'vue';
import {load, movies, error} from '../composables/getMovies'
import Movie from '@/components/Movie.vue';

  export default{
    name: 'home',
    components: {Movie},

    setup(){
      let moviesLength = ref(null)

      onMounted(async ()=>{
        await load();
        moviesLength.value = movies.value.length
        console.log(moviesLength.value);
      })
      return {movies, error, moviesLength}
    },
  }
</script>



<style scoped>
.movies{
  margin-top: 20px;
  background-color: rgb(254, 255, 236);
  text-align: center;
}

.space{
  margin-bottom: 120px;
}
</style>
