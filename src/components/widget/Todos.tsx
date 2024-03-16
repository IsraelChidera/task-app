import { useContext, useEffect, useState } from 'react';
import Container from '../elements/Container';
import Todo from './Todo';
import { TodoContext } from '../context/TodoContext';
import Button from '../elements/Button';
import { Form, Formik } from 'formik';

type InitialValuesProps = {
    task: string,
    tags: string,
    completed: boolean,
    startDate: any
}


const Todos = () => {
    const { todos, setShow, markedTodo, setMarkedTodo, setTodos, taskCompleted, isEditing, setIsEditing } = useContext(TodoContext);

    const [currentTodo, setCurrentTodo] = useState<any>({});

    const initialValues: InitialValuesProps = {
        task: currentTodo.task,
        tags: currentTodo.tags,
        completed: taskCompleted,
        startDate: new Date().toDateString()
    }

    const validateForm = (values: any) => {
        const errors: any = {}

        if (!values.task) {
            errors.task = "Task is required";
        } else if (values.task.length <= 3) {
            errors.task = 'Must be 3 characters or more';
        }

        if (!values.tags) {
            errors.tags = "Tag is required";
        } else if (values.tags.length <= 3) {
            errors.tags = 'Must be 3 characters or more';
        }

        return errors;
    }

    const onTodoUpdate = (values: InitialValuesProps) => {
        const updatedTodos = todos.map((todo: any) => {
            if (todo.id === currentTodo.id) {
                return { ...values, id: todo.id };
            }
            return todo;
        });

        setTodos(updatedTodos);

        localStorage.setItem("Todos", JSON.stringify(updatedTodos));

        setIsEditing(false);
        setShow(false);
        setCurrentTodo({});
    }

    const getData = () => {
        const data: any = localStorage.getItem('Todos');
        const storedTodos = JSON.parse(data);

        if (storedTodos) {
            setTodos(storedTodos);
            // setItems(storedTodos);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const onTodoDelete = (id: any) => {
        const filteredItem = todos.filter((x: any) => x.id !== id);
        setTodos(filteredItem);
        localStorage.setItem("Todos", JSON.stringify(filteredItem));
    }

    const handleEditClick = (e: any) => {

        let selectedTodo = todos.find((x: any) => x.id == e);
        setCurrentTodo(selectedTodo);
        setShow(false);

        setIsEditing((prev: any) => !prev);
    }

    const handleTaskSelected = (id: any) => {        
        const selectedTodo = todos.find((todo: any) => todo.id === id);

        selectedTodo.completed = true;


        const updatedTodos = todos.map((todo: any) => {
            if (todo.id === id) {
                // setMarkedTodo(true);

                return selectedTodo;
            }
            return todo;
        });

        console.log("marked todo", markedTodo);

        setTodos(updatedTodos);
        console.log("todos", todos);

    };



    return (
        <section className='mt-14'>
            {
                isEditing && <Formik
                    initialValues={initialValues}
                    validate={validateForm}
                    onSubmit={(values, { resetForm }: { resetForm: any }) => {
                        onTodoUpdate(values);
                        resetForm({ values: '' });
                    }}
                >
                    {
                        (
                            { values, errors, touched, handleChange, }:
                                {
                                    values: any, errors: any,
                                    touched: any, handleChange: any,
                                }
                        ) =>
                        (
                            <>
                                <Form className="mt-10 flex items-center justify-center">
                                    <div className="grid space-y-6  w-full max-w-lg -mx-3 mb-6">
                                        <div className="w-full  px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                Task
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="task"
                                                type="text"
                                                placeholder="Add task"
                                                name="task"
                                                value={values.task}
                                                onChange={handleChange}
                                            />
                                            <p className='text-xs text-primary'>
                                                {errors.task && touched.task && errors.task}
                                            </p>
                                        </div>

                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                Add tags
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-last-name"
                                                type="text"
                                                name="tags"
                                                placeholder="Doe"
                                                value={values.tags}
                                                onChange={handleChange}
                                            />

                                            <p className='text-xs text-primary'>
                                                {errors.tags && touched.tags && errors.tags}
                                            </p>
                                        </div>

                                        <div className='flex justify-end '>
                                            <Button className='bg-primary hover:bg-green-300 hover:text-dark' type="submit">
                                                <span>Update task</span>
                                            </Button>
                                        </div>
                                    </div>
                                </Form>
                            </>
                        )}
                </Formik>
            }

            <Container className='grid md:grid-cols-2 xl:grid-cols-3  gap-x-10 gap-y-8'>
                {todos.length > 0 ? todos.map((item: any) => (
                    <Todo
                        id={item.id}
                        key={item.id}
                        onClick={() => onTodoDelete(item.id)}
                        onTodoSelected={() => handleTaskSelected(item.id)}
                        onEditClick={() => handleEditClick(item.id)}
                        setMarkedTodo={setMarkedTodo}
                        todo={item.task}
                        tags={item.tags}
                        onMarkTaskCompleted={item.completed}
                        startDate={item.startDate}
                    />
                )) : <div className='text-3xl text-white'>
                    No content
                </div>}
            </Container>
        </section>
    )
}

export default Todos