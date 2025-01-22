import { ChangeEvent } from "react";

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
