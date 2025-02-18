import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Country } from "../model/types/country";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], void>({
      query: () => "all?fields=name,translations,flags,population,region,cca3,borders",
    }),
    getCountryByCode: builder.query<Country, string>({
      query: (code) => `alpha/${code}`,
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryByCodeQuery } = countryApi;