import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface loginCredentials {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com" }),
  endpoints: (builder) => ({
    login: builder.mutation<any, loginCredentials>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
