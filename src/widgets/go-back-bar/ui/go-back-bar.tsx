import React from "react"
import GoBack from "#features/go-back"

const  GoBackBar: React.FC = () => {
    return (
    <div className="min-w-80 w-11/12 max-w-7xl py-4 border-b border-t border-zinc-400 flex justify-start">
        <GoBack />
    </div>
    )
}

export default GoBackBar