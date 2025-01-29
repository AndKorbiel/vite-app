import { ChangeEvent } from "react";
import { TrainingUnitNumber } from "./constants";

export type DistanceInputData = {
  paceMinutes: number;
  paceSeconds: number;
  timeHours: number;
  timeMinutes: number;
  timeSeconds: number;
};

export type PaceInputData = {
  distanceKilometers: number;
  distanceMeters: number;
  distanceSelectedValue: AutocompleteOption;
  timeHours: number;
  timeMinutes: number;
  timeSeconds: number;
};

export type TrainingInputData = {
  distance: string;
  pace: string;
  pulse: string;
  time: string;
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

export type TrainingUnitData = {
  plan: string;
  result: string;
};

export type TrainingPlanData = {
  [key in TrainingUnitNumber]?: TrainingUnitData;
} & {
  date: string;
  weekId: number;
};