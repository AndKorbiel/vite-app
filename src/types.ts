import { ChangeEvent } from "react";
import { TrainingUnitNumber } from "./constants";

export type DistanceInputData = {
  pace: { minutes: number; seconds: number };
  time: { hours: number; minutes: number; seconds: number };
};

export type PaceInputData = {
  distance: { kilometers: number; meters: number };
  distanceSelectedValue: AutocompleteOption;
  time: { hours: number; minutes: number; seconds: number };
};

export type AutocompleteOption = {
  label: string;
  id: number;
};

export type CustomOnDistanceDataChange = (
  inputData:
    | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    | AutocompleteOption
    | AutocompleteOption[]
    | null
) => void;

export type TrainingUnitDataDetails = {
  distance: { kilometers: number; meters: number };
  pace: { minutes: number; seconds: number };
  pulse: number;
  time: { hours: number; minutes: number; seconds: number };
};

export type TrainingUnitData = {
  plan: Omit<TrainingUnitDataDetails, "pulse"> | null;
  result: TrainingUnitDataDetails | null;
};

export type TrainingPlanData = {
  [key in TrainingUnitNumber]?: TrainingUnitData;
} & {
  date: string;
  weekId: number;
};

export type TrainingUnitDrawerFormData = {
  data: Partial<TrainingUnitDataDetails> | null;
  rowId: string;
  weekId: number;
};