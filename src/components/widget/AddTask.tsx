import { useState } from 'react'
import Button from '../elements/Button';

type FormData = {
    task: string,
    tags: string,
    completed: boolean,
    startDate: any,
}

const AddTask = () => {
    const [formData, setFormData] = useState<FormData>({
        task: "",
        tags: "",
        completed: false,
        startDate: new Date().toDateString()
    },);

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
        localStorage.setItem("Todos", JSON.stringify(formData));
    }


    return (
        <form onSubmit={handleTodo} className="mt-10 flex items-center justify-center">
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
                        value={formData.task}
                        onChange={handleChange}
                    />
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
                        value={formData.tags}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex justify-end '>
                    <Button type="submit">
                        <span>Add task</span>
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default AddTask