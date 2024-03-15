import { FaPlus } from "react-icons/fa6";
import Button from '../elements/Button';
import Container from '../elements/Container';
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Navbar = () => {

    const { setShow } = useContext(TodoContext);

    const handleTaskForm = () => {
        setShow(true);
    }

    return (
        <nav className='pt-4'>
            <Container className='flex justify-between items-center space-x-10'>
                <h1 className='text-[30px]'>
                    Task app
                </h1>

                <div>
                    <Button onClick={handleTaskForm} className="md:block hidden">
                        Add task
                    </Button>

                    <FaPlus onClick={handleTaskForm} className='md:hidden block cursor-pointer' />
                </div>
            </Container>
        </nav>
    )
}

export default Navbar