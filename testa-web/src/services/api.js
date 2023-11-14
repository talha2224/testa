import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// https://nice-blue-indri.cyclic.app/api/v1

export const UserApis = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
      baseUrl: "https:localhost:5000/api/v1",
    }),
    endpoints:(builder)=>({
        registerPatient: builder.mutation({
            query: (userData) => ({
              url: '/patient/login',
              method: 'POST',
              body: userData,
            }),
          }),
    }),
})

export const {useRegisterPatientMutation} = UserApis