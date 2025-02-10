import { TrainingUnitNumber } from "../constants";

export type DistanceData = { kilometers: number; meters: number };
export type PaceData = { minutes: number; seconds: number };
export type TimeData = { hours: number; minutes: number; seconds: number };

export type TrainingDetails = {
  distance: DistanceData;
  pace: PaceData;
  pulse: number;
  time: TimeData;
};

export type TrainingData = {
  plan: Omit<TrainingDetails, "pulse"> | null;
  result: TrainingDetails | null;
};

export type TrainingUnitData = {
  [key in TrainingUnitNumber]?: TrainingData;
} & {
  date: string;
  weekId: number;
};
