import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface SignupDetaiils {
  profilePicture?: null | string;
  adminFirstName: string;
  adminLastName: string;
  adminPhone: string;
  adminEmail: string;
  adminGender: string;
  adminPassword: string;
  adminConfirmPassword?: string;
}

export interface PersonalDetailsInfo {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface loginCredentials {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, loginCredentials>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation<any, any>({
      query: (credentials) => ({
        url: "/user/new",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
