import React from 'react';
import Container from '../elements/Container';
import Button from '../elements/Button';
import { IoCheckmarkDone } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Todos = () => {
    return (
        <section className='mt-14'>
            <Container className='grid grid-cols-3 gap-x-10 gap-y-8'>
                <div className='bg-dark rounded-3xl pt-6 pb-4 px-3'>
                    <h2 className='border-b border-[#f7f7f7] text-[35px] leading-tight pb-6'>Order new dishwater from Amazon</h2>

                    <div>
                        <p className='mt-6 text-sm text-[#f7f7f7] font-medium'>TAGS</p>
                        <div className='mt-1 flex gap-x-3 gap-y-3 items-center flex-wrap text-sm'>
                            <div className='bg-yellow text-dark font-semibold p-1 rounded-md'>Home</div>
                            <div className='bg-yellow text-dark font-semibold p-1 rounded-md'>Contact</div>
                            <div className='bg-yellow text-dark font-semibold p-1 rounded-md'>Productivity</div>
                        </div>

                        <div className='mt-6'>
                            <p className='mt-6 text-sm text-[#f7f7f7] font-medium'>ADDED</p>

                            <p> 5 Oct, 11:28AM</p>
                        </div>

                        <div className='mt-4 flex space-x-3 items-center'>
                            <Button className='flex items-center space-x-4'> <span>Mark as complete</span> <IoCheckmarkDone className='text-2xl' /> </Button>
                            <button>
                                <MdDelete className='text-4xl hover:text-red-700 cursor-pointer' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='bg-dark rounded-3xl pt-6 pb-4 px-3'>
                    <h2 className='border-b border-[#f7f7f7] text-[35px] leading-tight pb-6'>Order new dishwater from Amazon</h2>

                    <div>
                        <p className='mt-6 text-sm text-[#f7f7f7] font-medium'>TAGS</p>
                        <div className='mt-1 flex gap-x-3 gap-y-3 items-center flex-wrap text-sm'>
                            <div className='bg-yellow text-dark font-semibold p-1 rounded-md'>Home</div>
                            <div className='bg-yellow text-dark font-semibold p-1 rounded-md'>Contact</div>
                            <div className='bg-yellow text-dark font-semibold p-1 rounded-md'>Productivity</div>
                        </div>

                        <div className='mt-6'>
                            <p className='mt-6 text-sm text-[#f7f7f7] font-medium'>ADDED</p>

                            <p> 5 Oct, 11:28AM</p>
                        </div>

                        <div className='mt-4 flex space-x-3 items-center'>
                            <Button className='flex items-center space-x-4'> <span>Mark as complete</span> <IoCheckmarkDone className='text-2xl' /> </Button>
                            <button>
                                <MdDelete className='text-4xl hover:text-red-700 cursor-pointer' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='bg-dark rounded-3xl pt-6 pb-4 px-3'>
                    <h2 className='border-b border-[#f7f7f7] text-[35px] leading-tight pb-6'>Order new dishwater from Amazon</h2>

                    <div>
                        <p className='mt-6 text-sm text-[#f7f7f7] font-medium'>TAGS</p>
                        <div className='mt-1 flex gap-x-3 gap-y-3 items-center flex-wrap text-sm'>
                            <div className='bg-yellow text-dark font-semibold p-1 rounded-md'>Home</div>
                            <div className='bg-yellow text-dark font-semibold p-1 rounded-md'>Contact</div>
                            <div className='bg-yellow text-dark font-semibold p-1 rounded-md'>Productivity</div>
                        </div>

                        <div className='mt-6'>
                            <p className='mt-6 text-sm text-[#f7f7f7] font-medium'>ADDED</p>

                            <p> 5 Oct, 11:28AM</p>
                        </div>

                        <div className='mt-4 flex space-x-3 items-center'>
                            <Button className='flex items-center space-x-4'> <span>Mark as complete</span> <IoCheckmarkDone className='text-2xl' /> </Button>
                            <button>
                                <MdDelete className='text-4xl hover:text-red-700 cursor-pointer' />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Todos