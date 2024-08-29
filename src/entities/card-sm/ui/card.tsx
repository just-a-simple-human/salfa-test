import React from "react"
import { deleteCard, toggleCardLike } from '#shared/lib/cardSlice.js';
import { useAppDispatch } from '#shared/lib/store.js';
import { ICard } from '#shared/types/cardTypes.js'
import { Link } from 'react-router-dom';
import Cross from './cross';
import Like from './like';

type Props = {
  card: ICard
}

const  Card: React.FC<Props> = ({card}) => {
  const dispatch = useAppDispatch()
  return (
    <Link to={`card/${card.id}`} className='h-fit rounded-lg border border-zinc-400' onClick={e => e.stopPropagation()}>
      <header className='w-full p-4 flex justify-between'>
        <button
          onClick={(e) => {
            e.preventDefault()
            dispatch(toggleCardLike({id: card.id}))
          }} 
        >
          <Like isActive={card.isLiked} />
        </button>
        <button 
          onClick={(e) => {
            e.preventDefault()
            dispatch(deleteCard({id: card.id}))
          }} className="[&:hover_path]:fill-red-600"
        >
          <Cross />
        </button>
      </header>
      <img src={card.url} alt="" className='w-full h-52'/>
      <footer className='w-full h-fit p-4'>
        <p className='w-fit h-full text-xl font-medium line-clamp-2 text-ellipsis'>{card.title}</p>
      </footer>
    </Link>
  )
}

export default Card