<template>
    <nav>
        <ul>
            <li> <RouterLink :to="{name:'home'}">Home</RouterLink></li>
            <li> <RouterLink to="/about">About</RouterLink></li>
        </ul>
    </nav>
  
<RouterView/>
</template>


<script>
    export default{

    }
</script>


<style>
    nav{
        margin: 0 50px;
        padding: 5px;
        background: rgb(187, 220, 233);
    }

    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    ul>li{
        display: block;
        font-size: 1.5em;
    }

    a.router-link-exact-active {
        color: white;
        font-weight: bold;
    }


</style>
