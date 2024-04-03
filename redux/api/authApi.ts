import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from '../../utils/constants'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithAuth,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (params: { email: string; password: string }) => ({
        url: `/user/auth`,
        method: 'POST',
        body: params
      })
    }),
    socialLogin: builder.mutation({
      query: (params: { email: string }) => ({
        url: `/user/auth/social`,
        method: 'POST',
        body: params
      })
    }),
    register: builder.mutation({
      query: (params: { email: string; firstName: string; lastName: string; password: string }) => ({
        url: `/user/register`,
        method: 'POST',
        body: params
      })
    }),
    verify: builder.mutation({
      query: (params: { otp: string }) => ({
        url: `/user/email-verification`,
        method: 'POST',
        body: params
      })
    }),
    changePassword: builder.mutation({
      query: (params: { newPassword: string; oldPassword: string }) => ({
        url: `/user/update-password`,
        method: 'PUT',
        body: params
      })
    }),
    updateUser: builder.mutation({
      query: (params: { firstName: string; lastName: string }) => ({
        url: `/user`,
        method: 'PUT',
        body: params
      })
    })
  })
})

export const {
  useLoginMutation,
  useSocialLoginMutation,
  useRegisterMutation,
  useVerifyMutation,
  useChangePasswordMutation,
  useUpdateUserMutation
} = authApi
