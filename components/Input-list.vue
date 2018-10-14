<template>
    <div class="input-list">
        <div class="form-put">
            <input type="text" @keyup.enter="addTodo" placeholder="Please input text and enter...">
            <!-- <button>Add</button> -->
            
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addTodo(e) {
            const text = {
                "text": e.target.value ,
                "status": false
            }
            if(text.text.trim()) {
                this.$store.dispatch('todo/addTodo', text)
                e.target.value = ''
            }
            
        },
    }
}
</script>

