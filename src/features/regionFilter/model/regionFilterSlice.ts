import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegionFilterState {
    selectedRegion: string;
}

const initialState: RegionFilterState = {
    selectedRegion: "All",
};

const regionFilterSlice = createSlice({
    name: "regionFilter",
    initialState,
    reducers: {
        setRegion: (state, action: PayloadAction<string>) => {
            state.selectedRegion = action.payload;
        },
    },
});

export const { setRegion } = regionFilterSlice.actions;
export default regionFilterSlice.reducer;