<template>
  <h2>Hello world </h2>
      <nav>
        <ul>
          <!-- <li> <RouterLink to="/" >Home</RouterLink> </li>
          <li> <RouterLink to="/about">About</RouterLink> </li> -->

          <li> <RouterLink :to="{ name: 'home' }" >Home</RouterLink> </li>
          <li> <RouterLink :to="{name: 'about'}">About</RouterLink> </li>

          <li> <a href="#">Contact</a> </li>
        </ul>
      </nav>

      <button @click="redirect">Redirect</button>
      <button @click="goBack">Go back</button>
      <button @click="goForward">Go forward</button>

  <RouterView />
</template>


<script>
   
   export default{
    methods: {
      redirect(){
        this.$router.push({name: 'home'})
      },

      goBack(){
        this.$router.go(-1)
      },

      goForward(){
        this.$router.go(1)
      }
    }
   }

</script>



<style>

nav>ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(203, 244, 244);
}

nav>ul>li{
  display: block;
  font-size: 2em;
}

nav>ul>li>a{
    color: blue;
    display: inline-block;
}

/* inbuilt from Router link */
a.router-link-exact-active {
  color: rgb(9, 85, 85);
}


/* a.router-link-active {
  color: rgb(255, 0, 149);
} */

</style>
