import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from '../../utils/constants'

export const libraryApi = createApi({
  reducerPath: 'libraryApi',
  baseQuery: baseQueryWithAuth,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    addToLibrary: builder.mutation({
      query: (params: { id: string[] }) => ({
        url: `/library/add`,
        method: 'POST',
        body: {
          articles: params.id
        }
      })
    }),
    fetchLibrary: builder.query({
      query: (params: { sort: string; page: number; limit: number }) => ({
        url: `/library`,
        method: 'GET',
        params
      })
    })
  })
})

export const { useAddToLibraryMutation, useLazyFetchLibraryQuery } = libraryApi
