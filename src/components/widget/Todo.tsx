import Button from '../elements/Button';
import { IoCheckmarkDone } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa6";
import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

type TodoProps = {
    todo: string,
    tags: string,
    startDate: any,
    onClick?: any,
    key?: any,
    onEditClick?: any,
    onTodoSelected?: any
}

const Todo = ({ key, todo, tags, startDate, onClick, onEditClick, onTodoSelected }: TodoProps) => {


    const { markedTodo } = useContext(TodoContext);
    console.log("marked todo from somewhere: ", markedTodo);


    return (
        <div key={key} className='transition-all ease-linear bg-dark rounded-3xl pt-6 pb-4 px-3 flex flex-col justify-between'>
            <div className='flex justify-end mt-2 mb-2'>
                <FaPen className='cursor-pointer mr-2 text-xl' onClick={onEditClick} />
            </div>

            <div>
                <h2 className='border-b border-[#f7f7f7] text-[35px] break-words leading-tight pb-6'>{todo}</h2>
                <p className='mt-6 text-sm text-[#f7f7f7] font-medium'>TAGS</p>
                <div className='mt-1 flex gap-x-3 gap-y-3 items-center flex-wrap text-sm'>
                    <div className='bg-yellow text-dark font-semibold p-1 rounded-md'>{tags}</div>
                    <div className='bg-yellow text-dark font-semibold p-1 rounded-md'>Contact</div>
                    <div className='bg-yellow text-dark font-semibold p-1 rounded-md'>Productivity</div>
                </div>

                <div className='mt-6'>
                    <p className='mt-6 text-sm text-[#f7f7f7] font-medium'>ADDED</p>

                    <p> {startDate}</p>
                </div>
            </div>

            <div className='mt-4 flex space-x-3 items-center'>
                <Button type="button" onClick={onTodoSelected} className={`w-full rounded-md py-[10px] px-[20px] ${markedTodo ? 'bg-dark': 'bg-primary'}   hover:bg-[#89DADE] transition-all ease-linear text-sm text-white hover:text-dark`}>
                    {markedTodo ? 
                    <div className='w-full flex justify-center items-center space-x-4'>
                        <span>Task Completed</span> <IoCheckmarkDone className='text-2xl' />
                    </div> : 
                    <div className='w-full flex justify-center items-center space-x-4'>
                        <span>Mark as complete</span> <IoCheckmarkDone className='text-2xl' />
                    </div>}
                </Button>
                <button type="button" onClick={onClick}>
                    <MdDelete className='text-4xl hover:text-red-700 cursor-pointer' />
                </button>
            </div>
        </div>
    )
}

export default Todo