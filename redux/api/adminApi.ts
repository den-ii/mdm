import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../../utils/constants";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: baseQueryWithAuth,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    dashboardSummary: builder.query({
      query: () => ({
        url: `/admin/dashboard`,
        method: "GET",
      }),
    }),
    fetchAllArticles: builder.query({
      query: (params) => ({
        url: `/admin/articles`,
        method: "GET",
        params: params,
      }),
    }),
    deleteArticle: builder.mutation({
      query: (params: { id: string }) => ({
        url: `/admin/articles/${params.id}/delete`,
        method: "DELETE",
      }),
    }),
    restoreArticle: builder.mutation({
      query: (params: { id: string }) => ({
        url: `/admin/articles/${params.id}/restore`,
        method: "PUT",
      }),
    }),
    articleApproval: builder.mutation({
      query: (params: { id: string; status: boolean }) => ({
        url: `/admin/articles/${params.id}/approval`,
        method: "PUT",
        body: {
          status: params.status,
        },
      }),
    }),
    getUploadUrl: builder.query({
      query: (params: { fileType: string; access: string }) => ({
        url: `/admin/upload-url`,
        method: "GET",
        params,
      }),
    }),

    uploadRegulation: builder.mutation({
      query: (params) => ({
        url: `/admin/articles/new`,
        method: "POST",
        body: params,
      }),
    }),
    updateRegulation: builder.mutation({
      query: (params: { id: string; data: any }) => ({
        url: `/admin/articles/${params.id}`,
        method: "PUT",
        body: params.data,
      }),
    }),
    fetchAllUsers: builder.query({
      query: (params) => ({
        url: `/admin/users`,
        method: "GET",
        params,
      }),
    }),
    updateAdminStatus: builder.mutation({
      query: (params: { userId: string; status: boolean }) => ({
        url: `/admin/users/${params.userId}/admin-status`,
        method: "PUT",
        body: {
          status: params.status,
        },
      }),
    }),
    updateUserActiveStatus: builder.mutation({
      query: (params: { userId: string; status: boolean }) => ({
        url: `/admin/users/${params.userId}/active-status`,
        method: "PUT",
        body: {
          status: params.status,
        },
      }),
    }),
  }),
});

export const {
  useDashboardSummaryQuery,
  useLazyFetchAllArticlesQuery,
  useDeleteArticleMutation,
  useRestoreArticleMutation,
  useGetUploadUrlQuery,
  useUploadRegulationMutation,
  useLazyFetchAllUsersQuery,
  useUpdateAdminStatusMutation,
  useUpdateUserActiveStatusMutation,
  useArticleApprovalMutation,
  useUpdateRegulationMutation,
} = adminApi;
