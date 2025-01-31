import { TrainingPlanData } from "./types";

export const runningDistanceOptions = [
  { id: 5, label: "5 km" },
  { id: 10, label: "10 km" },
  { id: 21.0975, label: "Half marathon" },
  { id: 42.195, label: "Marathon" },
];

export enum TrainingUnitNumber {
  ONE = "trainingUnit1",
  TWO = "trainingUnit2",
  THREE = "trainingUnit3",
  FOUR = "trainingUnit4",
  FIVE = "trainingUnit5",
  SIX = "trainingUnit6",
  SEVEN = "trainingUnit7",
}

export const initialTableData: TrainingPlanData[] = [
  {
    date: "12-19.01.2025",
    [TrainingUnitNumber.ONE]: {
      // plan: "45 minut - 6:20 tempo - 7.1 km",
      plan: {
        distance: { kilometers: 7, meters: 100 },
        pace: { minutes: 6, seconds: 20 },
        time: { hours: 0, minutes: 45, seconds: 0 },
      },
      result: null,
    },
    [TrainingUnitNumber.TWO]: {
      // plan: "30 minut - 6:00 - 5 km",
      plan: {
        distance: { kilometers: 5, meters: 0 },
        pace: { minutes: 6, seconds: 0 },
        time: { hours: 0, minutes: 30, seconds: 0 },
      },
      result: null,
    },
    [TrainingUnitNumber.THREE]: { plan: null, result: null },
    weekId: 1,
  },
  // {
  //   date: "20-26.01.2025",
  //   [TrainingUnitNumber.ONE]: {
  //     plan: "50 minut - 6:20 tempo - 7.8 km",
  //     result: "50 min - 6:10 - 7 km",
  //   },
  //   [TrainingUnitNumber.TWO]: { plan: "32 minuty - 6:00 - 5.3 km", result: "" },
  //   [TrainingUnitNumber.THREE]: { plan: "", result: "" },
  //   weekId: 2,
  // },
  // {
  //   date: "27.01-2.02.2025",
  //   [TrainingUnitNumber.ONE]: {
  //     plan: "55 minut - 6:20 tempo - 8.6 km",
  //     result: null,
  //   },
  //   [TrainingUnitNumber.TWO]: { plan: "34 minuty - 6:00 - 5.6 km", result: "" },
  //   [TrainingUnitNumber.THREE]: { plan: "", result: "" },
  //   weekId: 3,
  // },
  // {
  //   date: "3-9.02.2025",
  //   [TrainingUnitNumber.ONE]: {
  //     plan: "60 minut - 6:20 tempo - 9.4 km",
  //     result: null,
  //   },
  //   [TrainingUnitNumber.TWO]: {
  //     plan: "35 minut - 6:00 - 5.8 km",
  //     result: null,
  //   },
  //   [TrainingUnitNumber.THREE]: { plan: null, result: null },
  //   weekId: 4,
  // },
];
