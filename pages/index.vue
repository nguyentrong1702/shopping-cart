<template>
  <section class="container">
    <div class="todo">
      
      <h1>TODO LIST APPLICATION</h1>
      
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="panel">
            <Input/>
            <List/>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </section>
</template>

<script>

import List from '~/components/List.vue'
import Input from '~/components/Input-list.vue'

export default {
  components: {
    List,
    Input
  }
}
</script>
