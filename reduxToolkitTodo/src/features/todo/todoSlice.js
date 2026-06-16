import { createSlice, nanoid } from "@reduxjs/toolkit";

// how store look like initialyy.
const initialState= {
    todos: [{id: 1, text: "Hello World"}]
}

// creating slice which is holding reducers and other tools.
export const todoSlice= createSlice({
    name: "todo",
    initialState,

    reducers: {
        addTodo: (state, action) => {
            const todo= {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos= state.todos.filter((todo)=> todo.id!== action.payload)
        }
    }
})

// exporting reducers explicitaly.
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer