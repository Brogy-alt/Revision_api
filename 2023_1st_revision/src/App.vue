<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/login">Login</router-link> |
  </nav>
  <router-view/>
  

</template>
 
<script>
  export default {
    name: 'Products',


data(){
    return {
        arr: [
        {
            brand : 'Asus',
            name : 'Zenbooks 13oled',
            spec : 'AMD Ryzen 7, 16-GB RAM, 1-TB SSD',
            cost :'R22 168',
            img : '../assets/imgs/asuszenbooks13oled [laptop].webp'

        },
        {
            brand : 'Microsoft',
            name : 'Surface Laptop Go 2',
            spec : 'Intel Core i5, 8 GB of RAM, 128-GB SSD',
            cost :'R16 968',
            img : '../assets/imgs/Microsoft-Surface-Laptop-Go-2-[laptop].webp'

        },
        {
            brand : 'Asus',
            name : 'Chromebook Flip CX5',
            spec : 'Intel Core i5, 16-GB RAM, 128-GB SSD',
            cost :'R13 648',
            img : '../assets/imgs/asuschromebookflipcx5_GEAR.webp'

        },
        {
            brand : 'LG',
            name : 'Gram 16 ',
            spec : 'Intel Core i5, 8-GB RAM, 256-GB SSD',
            cost :'R23 900',
            img : '../assets/imgs/LG-gram-16-2-in-1-Touchscreen-Intel-Evo-Gear[laptop].webp'

        },
        {
            brand : 'Apple',
            name : 'MacBook Air',
            spec : 'Apple M1, 8-GB of Unified Memory, 256-GB SSD',
            cost :'R16 968',
            img : '../assets/imgs/LG-gram-16-2-in-1-Touchscreen-Intel-Evo-Gear[laptop].webp'

        },
        {
            brand : 'HP',
            name : 'Spectre x360 14',
            spec : 'Intel Core i7, 8-GB RAM, 256-GB SSD',
            cost :'R21 777',
            img : '../assets/imgs/HP20x360%2014[laptop].webp'

        },
        
        ]
    }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}



</style>
