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
        <button type={type} onClick={onClick} className={`rounded-md py-[10px] px-[20px] bg-primary hover:bg-[#89DADE] transition-all ease-linear text-sm text-white hover:text-dark ${className}`} {...props}>
            {children}
        </button>
    )
}

export default index