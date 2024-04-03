import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from '../../utils/constants'

export const subscriptionApi = createApi({
  reducerPath: 'subscriptionApi',
  baseQuery: baseQueryWithAuth,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    fetchSubscriptionPlans: builder.query({
      query: () => ({
        url: `/subscription/plans`,
        method: 'GET'
      })
    }),
    subscribe: builder.mutation({
      query: (params: { id: string }) => ({
        url: `/subscription/subscribe`,
        method: 'POST',
        body: {
          plan: params.id
        }
      })
    }),
    subscriptionHistory: builder.query({
      query: (params: { page: number; limit: number }) => ({
        url: `/subscription/history`,
        method: 'GET',
        params
      })
    })
  })
})

export const { useFetchSubscriptionPlansQuery, useLazySubscriptionHistoryQuery, useSubscribeMutation } = subscriptionApi
