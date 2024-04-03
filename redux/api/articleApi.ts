import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from '../../utils/constants'

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: baseQueryWithAuth,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    fetchArticles: builder.query({
      query: (params) => ({
        url: `/article`,
        method: 'GET',
        params: params
      })
    }),
    fetchArticlesAlphabetically: builder.query({
      query: (params) => ({
        url: `/article/a`,
        method: 'GET',
        params: params
      })
    }),
    fetchSingleArticle: builder.query({
      query: (params: { slug: string }) => ({
        url: `/article/single/${params.slug}`,
        method: 'GET'
      })
    }),
    fetchRecentlyAdded: builder.query({
      query: (params: { sort: string; page: number; limit: number }) => ({
        url: `/article/recently-added`,
        method: 'GET',
        params
      })
    }),
    topSearched: builder.query({
      query: (params: { sort: string; page: number; limit: number }) => ({
        url: `/article/top-searched`,
        method: 'GET',
        params
      })
    }),
    fetchCategories: builder.query({
      query: () => ({
        url: `/category`,
        method: 'GET'
      })
    }),
    fetchAgencyServices: builder.query({
      query: () => ({
        url: `/agency-services`,
        method: 'GET'
      })
    }),
    fetchAgencies: builder.query({
      query: (params) => ({
        url: `/agencies/`,
        method: 'GET',
        params: params
      })
    }),
    fetchSingleAgency: builder.query({
      query: (params: { slug: string }) => ({
        url: `/agencies/agency`,
        method: 'GET',
        params: params
      })
    })
  })
})

export const {
  useLazyFetchArticlesQuery,
  useFetchArticlesQuery,
  useFetchArticlesAlphabeticallyQuery,
  useFetchSingleArticleQuery,
  useLazyFetchRecentlyAddedQuery,
  useLazyTopSearchedQuery,
  useFetchCategoriesQuery,
  useFetchAgenciesQuery,
  useFetchAgencyServicesQuery,
  useFetchSingleAgencyQuery
} = articleApi
