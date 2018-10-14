
export const state = () => ({
    todos: JSON.parse(window.localStorage.getItem("todos") || '[]')
})

export const mutations = {
    ADD_TODO (state, text) {
        state.todos.push(text)
        localStorage.setItem('todos', JSON.stringify(state.todos))
        
    },
    REMOVE_TODO(state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1)
        localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    COMPLETE_ALL(state) {
        state.todos.map(item => item.status = true)
        localStorage.setItem('todos', JSON.stringify(state.todos))
        
    },
    COMPLETE_TODO(state, todo) {
        state.todos.forEach(function(e) {
            if(e.text === todo.text) {
                e.status = true
            }
        })
        localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    UNCOMPLETE_TODO(state, todo) {
        state.todos.forEach(function(e) {
            if(e.text === todo.text) {
                e.status = false
            }
        })
        localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    CLEAR_ALL(state) {
        state.todos = []
        localStorage.clear()
    }
}

export const getters = {
    todos: state => state.todos.filter(todo => todo.status === false),
    complete: state => {
        return state.todos.filter(todo => todo.status === true)
    }
}

export const actions = {
    addTodo({ commit }, text) {
        commit('ADD_TODO', text)
    },
    removeTodo({ commit }, text) {
        commit('REMOVE_TODO', text)
    },
    completeALL({ commit }) {
        commit('COMPLETE_ALL')
    },
    completeTodo({ commit }, item) {
        commit('COMPLETE_TODO',item)
    },
    uncompleteTodo({ commit }, item) {
        commit('UNCOMPLETE_TODO', item)
    },
    clearAll({ commit }) {
        commit('CLEAR_ALL')
    },

}