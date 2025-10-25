<template>
    <div class="result"  :style="{backgroundColor: reactionColor}">
        <h2>
            <!-- result: reaction {{ reaction }} : {{ remark() }} -->
            <p> result: {{ remark }}</p>
            <p v-if="reaction !== 1001"> reaction: {{ reaction }}</p>
        </h2>

    </div>
</template>



<script>
    export default{
        name: 'Result Vue',
        props:['reaction'],

        data(){
            return{
                remark: null,
                reactionColor: '#1E90FF',
            }
        },

        methods:{},

        mounted(){
                let r = Number(this.reaction);
                console.log('r: ' + this.reaction)
                switch(true){
                    case(r > 0 && r <= 10) : 
                        this.remark = 'Exceptional'; 
                        this.reactionColor = '#37DEDE'; 
                        break;
                    
                    case(r > 10 && r <= 20) : 
                        this.remark = 'Excellent'; 
                        this.reactionColor = '#1E90FF';
                        break;
                        
                    case(r > 20 && r <= 35) : 
                        this.remark = 'Very Good'; 
                        this.reactionColor = '#1E90FF';
                        break;
                        
                    case(r > 35 && r <= 60) : 
                        this.remark = 'Good'; 
                        this.reactionColor = '#00BFFF'; 
                        break;

                    case(r > 60 && r <= 80) : 
                        this.remark  = 'Fairly Good'; 
                        this.reactionColor = '#32CD32';
                        break;

                    case(r > 80 && r <= 100) : 
                        this.remark = 'Average'; 
                        this.reactionColor = '#ADFF2F'; 
                        break;    
                        
                    case(r > 100 && r <= 130) : 
                        this.remark = 'Fair'; 
                        this.reactionColor = '#FFD700';
                        break;
                    
                    case(r > 130 && r <= 160) : 
                        this.remark = 'Fairly Poor'; 
                        this.reactionColor = '#FFA500'; 
                        break;
                        
                    case(r > 160 && r <= 200) : 
                        this.remark = 'Poor'; 
                        this.reactionColor = '#FFA500'; 
                        break;
                        
                    case(r > 200 && r <= 270) : 
                        this.remark = 'Very Poor'; 
                        this.reactionColor = '#B22222';
                        break;

                    case(r > 270 && r <= 350) : 
                        this.remark = 'Fail'; 
                        this.reactionColor = '#DC143C';
                        break;
                        
                    case(r > 350 && r<=1000) : 
                        this.remark = 'Critical Fail'; 
                        this.reactionColor = '#8B0000';
                        break;  
                    
                    case(r == 1001) : 
                        this.remark = 'Fail! Cheating detected! \u{1F602}'; 
                        this.reactionColor = '#8B0000';
                        break; 
                    
                    default: 
                        this.remark = 'Something Went Wrong!! Try again'; break;  
                }
        }

    }
</script>




<style scoped>
.result{
    width: 400px;
    background: rgb(255, 82, 174);
    border-radius: 20px;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
.result p{
    color: white;
}
</style>
