<template>
  <div class="row">
      <div class="col-md-7">
        <div class="products">
        <ul>
          <li  v-for="item in products" :key="item.id">
            <nuxt-link to="/">
              <img :src="/product/ + item.picture" alt="">
            <h1>{{ item.title }}</h1>
            </nuxt-link>
            <p>Giá: {{ item.price }}</p>            
            <button @click="addtocart(item)" >Add to cart</button>
          </li>
          
        </ul>
    </div>
      </div>
      <div class="col-md-5">
        <div class="cart">
        <h1>
          Giỏ hàng ({{ carts.length }} sản phẩm)
          <span>Thành tiền: {{ total }}.000đ</span>
        </h1>
        <div class="item" v-for="item in carts" :key="item.id">
          <img :src="/product/ + item.picture" alt="">
          <span class="name">{{ item.title }}</span>
          <span>{{ item.price }}</span>
          <p>
            <button @click="downQuantity(item)">-</button>
            <input type="text" disabled  :value="item.quantity">
            <button @click="upQuantity(item)">+</button>
          </p>
          <button @click="removeCart(item)" class="removeCart">X</button>
        </div>
        
        </div>
      </div>
    </div>
</template>

<script>
import { mapState ,mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            products: 'products/products',
            carts: 'products/carts',
            total: 'products/cartTotal'
        }),
    },
    methods: {
      addtocart(item) {
        this.$store.dispatch('products/addtocart', item)
      },
      changeQuantity(e) {
        const text = e.target.value;
        console.log(text)
      },
      upQuantity(item) {
        this.$store.dispatch('products/upQuantity', item)
      },
      downQuantity(item) {
        this.$store.dispatch('products/downQuantity', item)
      },
      removeCart(item) {
        this.$store.dispatch('products/removeCart', item)
      }
    },
}
</script>



