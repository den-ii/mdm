import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from '../../utils/constants'

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: baseQueryWithAuth,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    fetchCards: builder.query({
      query: () => ({
        url: `/card`,
        method: 'GET'
      })
    }),
    setDefaultCard: builder.mutation({
      query: (params: { card: string }) => ({
        url: `/card/default`,
        method: 'PUT',
        body: params
      })
    })

  })
})

export const {
  useFetchCardsQuery,
  useSetDefaultCardMutation
} = cardApi
