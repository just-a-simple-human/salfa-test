import React from "react"
import Filter from "#features/filter"
import { toggleOnlyLiked } from "#shared/lib/cardSlice.ts"
import { useAppDispatch, useAppSelector } from "#shared/lib/store.ts"

const  FilterBar: React.FC = () => {
    const dispatch = useAppDispatch()
    const { onlyLiked } = useAppSelector(state => state.card.filter)
    return (
        <div className="min-w-80 w-11/12 max-w-7xl py-4 border-b border-t border-zinc-400 flex justify-end">
            <Filter title="Only liked:" value={onlyLiked} handler={() => {dispatch(toggleOnlyLiked())}}/>
        </div>
    )
}

export default FilterBar