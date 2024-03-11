import React from 'react';
import { FaPlus } from "react-icons/fa6";
import Button from '../elements/Button';
import Container from '../elements/Container';

const Navbar = () => {

    const handleAddTask = () => {
        
    }


    return (
        <nav className='pt-4'>
            <Container className='flex justify-between items-center space-x-10'>
                <h1 className='text-[30px]'>
                    Task app
                </h1>

                <div>
                    <Button onClick={handleAddTask} className="md:block hidden">
                        Add task
                    </Button>

                    <FaPlus className='md:hidden block' />
                </div>
            </Container>
        </nav>
    )
}

export default Navbar