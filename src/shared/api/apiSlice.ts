import { ICard } from "#shared/types/cardTypes.js";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getCards: builder.query<ICard[], number>({
            query: (limit?: number) => `photos?_limit=${limit || 8}`
        }),
        getCardById: builder.query<ICard[], string | undefined>({
            query: (id?: string) => 'photos?id=' + id
        })
    })
})

export const { useGetCardsQuery , useGetCardByIdQuery } = api