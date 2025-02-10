import { ChangeEvent } from "react";
import { DistanceData, PaceData, TimeData, TrainingDetails } from "./main";

export type DistanceInputData = {
  pace: PaceData;
  time: TimeData;
};

export type PaceInputData = {
  distance: DistanceData;
  distanceSelectedValue: AutocompleteOption;
  time: TimeData;
};

export type AutocompleteOption = {
  label: string;
  id: number;
};

export type DistanceCalcOnChange = (
  inputData:
    | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    | AutocompleteOption
    | AutocompleteOption[]
    | null
) => void;

export type TrainingUnitDrawerFormData = {
  data: Partial<TrainingDetails> | null;
  rowId: string;
  weekId: number;
};
