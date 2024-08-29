import React from "react"
import { useNavigate } from "react-router-dom"

const  GoBack: React.FC = () => {
    const navigate = useNavigate()
    return (
        <button 
            onClick={() => {navigate(-1)}}
            className="w-fit flex items-center gap-4 text-4xl font-medium"
        >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 34.35C21.45 33.6 21.15 32.7 20.4 32.25L8.55 25.35H45C45.9 25.35 46.5 24.75 46.5 23.85C46.5 22.95 45.9 22.35 45 22.35H8.55L20.4 15.45C21.15 15 21.3 14.1 21 13.35C20.55 12.6 19.65 12.45 18.9 12.75L2.25 22.35C1.2 22.95 1.2 24.3 2.25 24.9L18.9 34.95C19.65 35.4 20.55 35.1 21 34.35Z" fill="#27272A"/>
            </svg>
            GoBack
        </button>
    )
}

export default GoBack