<template>

  <h2> Reaction Timer </h2>
  <!-- <p v-if="reaction !== 0">Player Reaction: {{ reaction }}</p> -->

  <button @click="start" :disabled="isPlaying">play</button>

  <!-- block template-->
  <Block v-if="isPlaying" :delayTimer="delayTimer" @playerReaction="getReaction">
  </Block>

  <!-- result template-->
   <Result v-if="!isPlaying && reaction !=0" :reaction="reaction">
  </Result>


</template>

<!-- script -->
<script>
  import Block from './components/Block.vue';
  import Result from './components/Result.vue';

  export default{
    name: 'Reaction Timer',
    components: {Block, Result},
    data(){
      return{
        isPlaying: false,
        delayTimer: 0,
        reaction: 0,
      }
    },
    methods:{
      start(){
        this.reaction = 0
        this.delayTimer = 2000 + Math.random() * 5000
        this.delayTimer = Math.floor(this.delayTimer)
        // console.log(this.delayTime)
        this.isPlaying = true
      },
      getReaction(r){
        this.reaction = r
        console.log(`reaction: ${this.reaction}`)
        this.isPlaying = false
      }
    }
  }

</script>

<!-- style -->
<style>
#app{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color:#2c3e50;
    margin-top: 50px;
}

button{
  padding: 2px 10px;
  border-color: aqua;
  background-color: rgb(23, 101, 101);
  color: white;
}

button:hover{
  background-color: aqua;
  border-color: rgb(23, 101, 101);
  color: black;
}

button[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
