import React from "react"
type Props = {
    isActive: boolean
    handler: (value: boolean) => void
}

const  Checkbox: React.FC<Props> = ({isActive, handler}) => {
    return (
        <button onClick={() => handler(!isActive)} className="p-2 rounded-lg border border-zinc-400">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}>
                <rect width="32" height="32" rx="8" fill="#059669"/>
            </svg>
        </button>
    )
}

export default Checkbox