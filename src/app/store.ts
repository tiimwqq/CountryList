import { configureStore } from "@reduxjs/toolkit";
import { countryApi } from "../entities/country/api/countryApi";
import searchReducer from "../features/search/model/searchSlice";
import regionFilterReducer from "../features/regionFilter/model/regionFilterSlice";
import populationSortReducer from "../features/populationSort/model/populationSortSlice";

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
    search: searchReducer,
    regionFilter: regionFilterReducer,
    populationSort: populationSortReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;