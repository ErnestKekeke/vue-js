import {ref} from 'vue'

// const getMovies = ()=>{
    const movies = ref([])
    const error = ref(null)

    async function load(){
        console.log("geting movies from api")
        try{

            let response = await fetch('http://localhost:3000/movies/')
            if(!response.ok){
                throw Error('errors getting movies')
            }
            movies.value = await response.json()

        }catch(err){
            error.value = err.message;
        }
    }  
    
    // return {movies, error, load}
// }

export{
    movies,
    error,
    load
}