import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { initialTableData, TrainingUnitNumber } from "../constants";
import { TrainingUnitDataDetails } from "../types";

type TrainingResultPayload = {
  result: TrainingUnitDataDetails;
  trainingUnit: TrainingUnitNumber;
  weekId: number;
};

export const trainingDataSlice = createSlice({
  name: "trainingData",
  initialState: initialTableData,
  reducers: {
    addTrainingData: (state, action: PayloadAction<TrainingResultPayload>) => {
      return state.map((data) => {
        if (data.weekId === action.payload.weekId) {
          data = {
            ...data,
            [action.payload.trainingUnit]: {
              ...data[action.payload.trainingUnit],
              result: action.payload.result,
            },
          };
          return data;
        }
        return data;
      });
    },
  },
});

export const { addTrainingData } = trainingDataSlice.actions;

export const selectCount = (state: RootState) => state.trainingData;

export default trainingDataSlice.reducer;
