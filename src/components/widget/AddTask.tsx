"use client"

import { useState } from 'react'
import Button from '../elements/Button';
import { Form, Formik } from 'formik';

type FormData = {
    task: string,
    tags: string,
    completed: boolean,
    startDate: any,
}

type ErrorProps = {
    task: string,
    tags: string,
}

type InitialValuesProps = {
    task: string,
    tags: string,
    completed: boolean,
    startDate: any
    
}


const AddTask = () => {
    const [taskCompleted, setTaskCompleted] = useState(false);
    const initialValues: InitialValuesProps = {
        task: "",
        tags: "",
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

    const onTodoSubmit = (values: InitialValuesProps) => {
        console.log(values);
        localStorage.setItem("Todos", JSON.stringify(values));
    }


    return (
        <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={(values, { resetForm }: { resetForm: any }) => {
                onTodoSubmit(values);
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
                                    <Button type="submit">
                                        <span>Add task</span>
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </>
                )}
        </Formik>


    )
}

export default AddTask