import { createContext, useContext } from "react";

// during the context creation we just pass the states and method. we can define it later.
// CREATING THE CONTEXT
export const TodoContext= createContext({
    todos: [
        {
            // id: 1,
            // todo: "todo msg",
            // completed: "false"
        }
    ],
    addTodo: (todo)=> {},
    updatedTodo: (id, todo)=> {},
    deleteTodo: (id)=> {},
    toggleComplete: (id)=> {}
})

export const useTodo= ()=> {
    return useContext(TodoContext)
}

// PROVIDING THE CONTEXT
export const TodoProvider= TodoContext.Provider