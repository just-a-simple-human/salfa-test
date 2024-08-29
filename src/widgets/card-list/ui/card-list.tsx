import React from "react"
import Card from "#entities/card-sm"
import { useGetCardsQuery } from "#shared/api/apiSlice.js"
import { updateCards } from "#shared/lib/cardSlice.js"
import { useAppDispatch, useAppSelector } from "#shared/lib/store.js"
import { useEffect } from "react"

const  CardList: React.FC = () => {
  const {data, error} = useGetCardsQuery(8)
  const dispatch = useAppDispatch()
  const { cards, filter } = useAppSelector(state => state.card)
  useEffect(() => {
    if (data && !error && cards.length === 0) {
      dispatch(updateCards({cards: data}))
    }
  }, [data])
  return (
    <div className="min-w-80 w-11/12 max-w-7xl h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start gap-x-16 gap-y-8">
      {cards.filter(filter.onlyLiked ? e => e.isLiked : e => e).map(e => (<Card card={e} key={e.id}/>))}
    </div>
  )
}

export default CardList