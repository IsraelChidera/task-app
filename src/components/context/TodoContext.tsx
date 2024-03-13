import React, { createContext, useState } from 'react';


interface TodoContextType {
    taskCompleted: boolean;
    setTaskCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TodoContext = createContext<TodoContextType|any>({});

export const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
   
    const [taskCompleted, setTaskCompleted] = useState(false);
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        
    }

    return (
        <TodoContext.Provider value={{taskCompleted, setTaskCompleted, todos, setTodos}}>
        { children }
        </TodoContext.Provider>
    )
}