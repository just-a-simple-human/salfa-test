import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ICard } from '../types/cardTypes';

interface ICardState {
    cards: ICard[],
    filter: {
        onlyLiked: boolean
    }
}

const initialState: ICardState = {
    cards: [],
    filter: {
        onlyLiked: false
    }
}

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        updateCards(state, action: PayloadAction<{cards: ICard[]}>) {
            state.cards = action.payload.cards
        },
        deleteCard(state, action: PayloadAction<{id: number}>) {
            state.cards = state.cards.filter(e => e.id !== action.payload.id)
        },
        toggleCardLike(state, action: PayloadAction<{id: number}>) {
            const card = state.cards.find(e => e.id === action.payload.id)
            if (card) {
                card.isLiked = !card.isLiked
            }
        },
        toggleOnlyLiked(state) {
            state.filter.onlyLiked = !state.filter.onlyLiked
        }
    }
})

export const {updateCards, deleteCard, toggleCardLike, toggleOnlyLiked} = cardSlice.actions
export default cardSlice.reducer