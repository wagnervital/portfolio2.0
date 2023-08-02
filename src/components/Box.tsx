import { HTMLAttributes } from "react"

interface BoxProps extends HTMLAttributes<HTMLDivElement> { }

export const Box = ({ children, className }: BoxProps) => {
    return (
        <div className={`bg-slate-700 rounded p-3 shadow shadow-zinc-900 ${className} mb-5`}>
            {children}
        </div>
    )
}