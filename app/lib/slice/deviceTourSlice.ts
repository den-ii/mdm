import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DeviceTourState {
  tour: boolean;
  tourStage: number;
}

const initialState: DeviceTourState = {
  tour: true,
  tourStage: 0,
};

export const deviceTourSlice = createSlice({
  name: "deviceTour",
  initialState,
  reducers: {
    closeTour: (state) => {
      state.tour = false;
    },
    setTourStage: (state, action: PayloadAction<number>) => {
      state.tourStage = action.payload;
    },
  },
});

export const { closeTour, setTourStage } = deviceTourSlice.actions;

export default deviceTourSlice.reducer;
