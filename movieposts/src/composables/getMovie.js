import {ref} from 'vue'

// const getMovies = ()=>{
    const movie = ref([])
    const error = ref(null)

    async function load(id){ 
        console.log(id)
        try{

            let response = await fetch('http://localhost:3000/movies/' + id)
            if(!response.ok){
                throw Error('errors getting movies')
            }
            movie.value = await response.json()

        }catch(err){
            error.value = err.message;
        }
    }  
    
    // return {movies, error, load}
// }

export{
    movie,
    error,
    load
}