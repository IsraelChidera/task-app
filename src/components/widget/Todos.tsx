import { useContext, useEffect, useState } from 'react';
import Container from '../elements/Container';
import Todo from './Todo';
import { TodoContext } from '../context/TodoContext';


const Todos = () => {
    const { todos, setTodos } = useContext(TodoContext);
    // const [items, setItems] = useState([]);

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
    }


    return (
        <section className='mt-14'>
            <Container className='grid grid-cols-3 gap-x-10 gap-y-8'>
                {todos.length > 0 ? todos.map((item: any) => (
                    <Todo key={item.id} onClick={() => onTodoDelete(item.id)} todo={item.task} tags={item.tags} startDate={item.startDate} />
                )) : <div className='text-3xl text-white'>
                    No content
                </div>}
            </Container>
        </section>
    )
}

export default Todos