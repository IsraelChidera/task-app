import React, { createContext, useState } from 'react';


interface TodoContextType {
    taskCompleted: boolean;
    setTaskCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TodoContext = createContext<TodoContextType | any>({});

export const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isEditing, setIsEditing] = useState<any>(false);
    const [taskCompleted, setTaskCompleted] = useState(false);
    const [todos, setTodos] = useState([]);
    const [show, setShow] = useState(false);
    const [markedTodo, setMarkedTodo] = useState<any>(false);

    return (
        <TodoContext.Provider value={{ markedTodo, setMarkedTodo, taskCompleted, show, setShow, setTaskCompleted, todos, setTodos, isEditing, setIsEditing }}>
            {children}
        </TodoContext.Provider>
    )
}