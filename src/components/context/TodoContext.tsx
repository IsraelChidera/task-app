import React, { createContext, useState } from 'react';


interface TodoContextType {
    taskCompleted: boolean;
    setTaskCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TodoContext = createContext<TodoContextType|any>({});

export const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
   
    const [taskCompleted, setTaskCompleted] = useState(false);

    return (
        <TodoContext.Provider value={{taskCompleted, setTaskCompleted}}>
        { children }
        </TodoContext.Provider>
    )
}