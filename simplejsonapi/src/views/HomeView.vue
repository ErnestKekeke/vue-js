<template>
<h2>Home Page</h2>
      <div>
        <span>Available Jobs </span>
        <RouterLink :to="{name: 'jobs'}">all jobs</RouterLink> 
      </div>

</template>

<style scoped>
span{
    color: red;
}
</style>
