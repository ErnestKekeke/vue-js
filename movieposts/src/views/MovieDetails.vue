<template>
    <!-- <p>movie id: {{ $route.params.id }}</p> -->
    <!-- <p>movie id: {{ id }}</p> -->

        <div class="movie">
            <img :src="movie.img_link" :alt="movie.title"/>
            <h4> {{ movie.title }}</h4>
            <p> {{ movie.desc }}</p>
            <span v-for="cast in movie.cast" :key="cast">#{{ cast }} | </span>
            <p>Year: <b>{{ movie.year }}</b> </p>
            <button @click="goBack">go Back</button>
        </div>

            <button @click="prevMovie" class="btn-img" id="btn-prev">Prev</button>
            <button @click="nextMovie" class="btn-img" id="btn-next">Next</button>

        <div class="space"></div>
         
</template>


<script>
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useRoute } from 'vue-router'
    import {load, movie, error} from '../composables/getMovie'
    export default{
        props:['id'],
        setup(props){
            // console.log(movie)
            // console.log(movie.title)
            console.log(movie.img_link)

            //...............................
            const route = useRoute();
            const moviesLength = Number(route.query.moviesLength); //
            console.log("movies length: "+ moviesLength) 
            let movieIndex = Number(route.query.movieIndex + 1); // 
            console.log("movies index: "+ movieIndex)


            //...............................
            onMounted(async ()=>{
               await load(props.id)
            });


            const nextMovie = async()=>{
                // in real case filter work with movie id, and check if it exists 
                movieIndex = movieIndex + 1;
                movieIndex = (movieIndex <= moviesLength)? movieIndex : 1;
                await load(movieIndex)      
            }

            const prevMovie = async()=>{
                // in real case filter work with movie id, and check if it exists 
                movieIndex = movieIndex - 1;
                movieIndex = (movieIndex >= 1)? movieIndex : moviesLength;
                await load(movieIndex)      
            }


            //..................................
            const router = useRouter();
            const goBack = () => {
            router.go(-1);
            };

            return {movie, error, goBack, nextMovie, prevMovie}
        },
    }
</script>


<style scoped>

.movie{
    margin-top: 20px;
    background-color: rgba(111, 205, 180, 0.3);
    text-align: center;
    padding-bottom: 20px;
}

.movie h4{
  font-size: 1.5em;  
  color: rgb(21, 74, 74);
}

.movie p{
    text-align: justify;
    margin: 20px 0;
     line-height: 50px;
    font-size: 1.5em;
    padding: 0 50px;
}

.movie > span{
    letter-spacing: 4px;
    color: rgb(4, 29, 29);
}

img{
    display: inline-block;
    text-align: start;
    width: 250px;
    border: 2px solid red;
    box-shadow: 4px 4px 4px black;
}

.btn-img{
    position: fixed;
    top: 0;
    font-size: 2em;
    font-family: 'Trebuchet MS', sans-serif;
    padding: 10px;
    border-radius: 50%;
}

#btn-next{
    right: 100px;
    color: rgb(9, 103, 26);
}

#btn-prev{
    left: 100px;
    color: rgb(192, 120, 84);
}

.space{
  margin-bottom: 120px;
}
</style>
