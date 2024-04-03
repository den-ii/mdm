import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQueryWithAuth = async (args: any, api: any, extra: any) => {
  return fetchBaseQuery({ baseUrl: args })(
    {
      ...args
    },
    api,
    extra
  )
}

export const awsApi = createApi({
  reducerPath: 'awsApi',
  baseQuery: baseQueryWithAuth,
  refetchOnMountOrArgChange: false,
  endpoints: (builder) => ({
    uploadAwsFile: builder.mutation({
      query: (args: { body: any; awsUrl: string; headers: any }) => ({
        url: args.awsUrl,
        method: 'PUT',
        body: args.body,
        headers: args.headers
      })
    })
  })
})

export const { useUploadAwsFileMutation } = awsApi
