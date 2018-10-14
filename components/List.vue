<template>
    <div class="list">
        
        
        <p v-if="todos.length < 1">
            Hãy thêm công việc của bạn...
        </p>
        <div v-else>
             <h2>
                Công việc
                <button class="completeAll" @click="clearAll">Xoá tất cả</button>    
                <button class="completeAll" @click="completeAll">Xong tất cả</button>    
            </h2>
            <ul>
                <li v-for="(todo, index) in todos" :key="index">
                    <!-- <input type="checkbox" > -->
                    <span>{{ todo.text }}</span>
                    <button class="complete" @click="completeTodo(todo)">Xong</button>
                    <button @click="removeTodo(todo)">X</button>
                    
                </li>
            </ul>
        </div>

        <div v-if="complete.length > 0">
            <h2>Hoàn thành</h2>
            <ul class="comp">
                <li class="complete" v-for="(todo, index) in complete" :key="index">
                    <button class="complete re" @click="uncompleteTodo(todo)">Quay lại</button>
                    <del>{{ todo.text }}</del>
                </li>
            </ul>
        </div>

        
    </div>
</template>

<script>

import { mapState ,mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            todos: 'todo/todos',
            complete: 'todo/complete'
        })
    },
    methods: {
        removeTodo(todo) {
            this.$store.dispatch('todo/removeTodo', todo)
        },
        completeAll() {
            this.$store.dispatch('todo/completeALL')
        },
        completeTodo(todo) {
            this.$store.dispatch('todo/completeTodo',todo)
        },
        uncompleteTodo(todo) {
            this.$store.dispatch('todo/uncompleteTodo', todo)
        },
        clearAll() {
            this.$store.dispatch('todo/clearAll')
        }
        
    },
    watch: {
        
    }
}
</script>

