import { FaPlus } from "react-icons/fa6";
import Container from '../elements/Container';
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import NavButton from '../elements/NavButton'
const Navbar = () => {

    const { setShow, setIsEditing } = useContext(TodoContext);

    const handleTaskForm = () => {
        setShow(true);
        setIsEditing(false);
    }

    return (
        <nav className='pt-4'>
            <Container className='flex justify-between items-center space-x-10'>
                <h1 className='text-[30px]'>
                    Task app
                </h1>

                <div>
                    <NavButton onClick={handleTaskForm} className="md:block hidden">
                        Add Task
                    </NavButton>                   

                    <FaPlus onClick={handleTaskForm} className='md:hidden block cursor-pointer' />
                </div>
            </Container>
        </nav>
    )
}

export default Navbar