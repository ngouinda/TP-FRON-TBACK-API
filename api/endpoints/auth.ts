import { apiSlice } from "../apiSlice"

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/api/login_check',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: any) => {
        const accessToken = response.token; 

        if (accessToken) {
          localStorage.setItem('accessToken', accessToken);
          console.log('Access token saved to localStorage');
        } else {
          console.warn('Access token missing in login response');
        }

        return response; 
      },
      invalidatesTags: [{ type: 'Auth', id: 'STATUS' }],
    }),
  }),
});

export const {
  useLoginMutation,
} = authApi;
/* eslint-disable @typescript-eslint/no-explicit-any */