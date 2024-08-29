import React from "react"
import { ICard } from "#shared/types/cardTypes.ts"

type Props = {
  card: ICard
}

const  Card: React.FC<Props> = ({card}) => {
  return (
    <div className="min-w-80 w-11/12 max-w-7xl flex flex-wrap justify-center items-start">
      <img src={ card.url } alt="" className="min-w-80 w-2/5 max-w-md aspect-square"/>
      <h2 className="h-full py-8 md:px-8 lg:px-16 flex-1 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left text-pretty">{ card.title }</h2>
    </div>
  )
}

export default Card