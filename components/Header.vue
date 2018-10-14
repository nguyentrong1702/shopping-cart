<template>
    <header>
        <ul class="ul-header">
            <li><nuxt-link @click="setActive('home')" :class="{ active: isActive('home') }"  to="/">TODO</nuxt-link></li>
            <li><nuxt-link @click="setActive('product')" :class="{ active: isActive('product') }"  to="/products/">PRODUCTS</nuxt-link></li>
           
            
        </ul>
        
    </header>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    data() {
    return { activeItem: '' }
  },

  methods: {

    isActive(menuItem) {
      return this.activeItem === menuItem
    },

    
    setActive(menuItem) {
      this.activeItem = menuItem
      
    }
    
  },
}
</script>


<style>

</style>

