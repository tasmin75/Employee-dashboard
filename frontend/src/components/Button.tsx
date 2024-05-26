// import React from 'react'
type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button className="bg-blue-700 flex gap-1 items-center text-white p-3 py-4 rounded-xl text-sm font-semibold" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
