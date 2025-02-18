import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PopulationSortState {
  sortOrder: "asc" | "desc" | "none"; // "asc" — по возрастанию, "desc" — по убыванию, "none" — без сортировки
}

const initialState: PopulationSortState = {
  sortOrder: "none",
};

const populationSortSlice = createSlice({
  name: "populationSort",
  initialState,
  reducers: {
    setSortOrder: (state, action: PayloadAction<"asc" | "desc" | "none">) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setSortOrder } = populationSortSlice.actions;
export default populationSortSlice.reducer;
