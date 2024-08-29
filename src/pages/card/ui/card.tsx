import React from "react"
import { useGetCardByIdQuery } from "#shared/api/apiSlice.ts"
import { useParams } from "react-router-dom"
import Card from '#entities/card-lg';
import GoBackBar from "#widgets/go-back-bar";

const  CardPage: React.FC = () => {
    const { id } = useParams()
    const { data } = useGetCardByIdQuery( id )
    return (
        <main className="w-full h-fit min-h-screen p-16 flex flex-col items-center gap-16 bg-slate-50">
            <GoBackBar />
            { data && <Card card={data[0]}/> }
        </main>
    )
}

export default CardPage