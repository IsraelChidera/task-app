import React from 'react'

type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    onClick?: any,
    type?: any,
    props?: any
}

const index = ({ type, children, className, onClick, ...props }: ButtonProps) => {
    return (
        <button type={type} onClick={onClick} className={`rounded-md py-[10px] px-[30px] bg-primary text-sm text-white ${className}`} {...props}>
            {children}
        </button>
    )
}

export default index