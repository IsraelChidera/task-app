import React from 'react'

type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    onClick?: any,
    type?: any,
    props?: any,
    disable?: any
}

const index = ({ type, disable, children, className, onClick, ...props }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`rounded-md py-[10px] px-[20px] transition-all ease-linear bg-primary hover:bg-green-300 hover:text-dark text-sm ${className}`} {...props}>
        {children}
    </button>
  )
}

export default index