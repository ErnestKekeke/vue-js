<template>
    <h4>{{ movie.title }}</h4>
    <p>{{ shortDesc }}</p>
    <span v-for="cast in movie.cast" :key="cast">#{{ cast }} | </span>
    <p>Year: <b>{{ movie.year }}</b> </p>

</template>

<!-- <template>
    <p>Movies .....</p>
</template> -->

<script>
    export default{
        name: 'movie',
        props: ['movie'],
        setup(props){
            const shortDesc = props.movie.desc.substring(0, 60) + '....';
            return{shortDesc}
        }
    }
</script>

<style scoped>
 h4{
    color: rgb(42, 120, 120);
 }
 p{
    color: black;
 }
</style>