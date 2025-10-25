<template>
    <div v-if="showBlock" class="block" @click="stopReaction">
        <!-- click me {{ delayTimer }} -->
         {{ reactionText }}
    </div>

    <div v-if="!showBlock" class="cheat" @click="failReaction">
        <h3>Wait until <span>Reaction Screen</span> Appear </h3>
    </div>

</template>


<script>

export default{
    props: ['delayTimer'],

    data(){
        return{
            showBlock: false,
            timer: 0,
            reactionId: 1,
            reaction: 0,
            reactionText: 'Click Me',
        }
    },

    //......................
    mounted(){
        console.log('Component has been mounted');
        setTimeout(()=>{
            this.showBlock = true
            this.startReaction();
        }, this.delayTimer)
    },

    methods: {
        startReaction(){
            this.reactionId =  setInterval(()=>{
                this.reaction++; 
                // console.log(this.reaction);
                if(this.reaction >= 1000) this.stopReaction();
                this.reactionText = 'Reaction: ' + this.reaction;
            }, 10)
        },

        stopReaction(){
            clearInterval(this.reactionId)
            this.reactionText = 'Reaction: ' + this.reaction;
            this.$emit('playerReaction', this.reaction)
            this.reaction = 0   
        },

        failReaction(){
            this.$emit('playerReaction', 1001)
            this.reaction = 0   
        }
    }


}

</script>


<style scoped>
.block{
    width: 400px;
    background: #0faf87;
    border-radius: 20px;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}

.cheat{
    position: fixed;
    width: 100%;
    height: 100vw;
    padding-top: 20px;
    background-color: rgba(199, 199, 199, 0.636);
}

.cheat h3{
    color: rgb(99, 65, 21);
}

.cheat h3 span{
    color:  #0faf87;
}
</style>
