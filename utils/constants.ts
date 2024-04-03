import { selectToken } from '../redux/storage/memory'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const BASEURL = String(process.env.NEXT_PUBLIC_API)

export const baseQueryWithAuth = async (args: any, api: any, extra: any) => {
  const token = selectToken(api.getState())

  let headers = {
    ...args.headers,
    'Content-Type': 'application/json'
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return fetchBaseQuery({ baseUrl: BASEURL })(
    {
      ...args,
      headers: headers
    },
    api,
    extra
  )
}
