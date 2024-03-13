import React, { useContext } from 'react';
import Button from '../elements/Button';
import { IoCheckmarkDone } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { TodoContext } from '../context/TodoContext';

type TodoProps = {
    todo: string,
    tags: string,
    startDate: any,
    onClick?: any,    
    key?: any    
}

const Todo = ({ key, todo, tags, startDate, onClick }: TodoProps) => {        

    return (
        <div key={key} className='transition-all ease-linear bg-dark rounded-3xl pt-6 pb-4 px-3 flex flex-col justify-between'>
            <div>
                <h2 className='border-b border-[#f7f7f7] text-[35px] leading-tight pb-6'>{todo}</h2>
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
                <Button className='w-full flex justify-center items-center space-x-4'> <span>Mark as complete</span> <IoCheckmarkDone className='text-2xl' /> </Button>
                <button type="button" onClick={onClick}>
                    <MdDelete className='text-4xl hover:text-red-700 cursor-pointer' />
                </button>
            </div>
        </div>
    )
}

export default Todo