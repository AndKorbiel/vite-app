import { TrainingUnitNumber } from "./constants";
import { DistanceInputData, PaceInputData } from "./types/inputsData";
import { TrainingUnitData, TrainingData } from "./types/main";

export const calculateDistance = (data: DistanceInputData): string => {
  const { pace: givenPace, time: givenTime } = data;
  const pace = Number(givenPace.minutes * 60) + Number(givenPace.seconds);

  const time =
    Number(givenTime.hours * 3600) +
    Number(givenTime.minutes * 60) +
    Number(givenTime.seconds);

  const distanceKm = Math.floor(time / pace);
  const distanceCm = Math.round((time / pace) * 1000 - distanceKm * 1000);

  if (isNaN(distanceKm) || isNaN(distanceCm)) {
    return "0 km 0 m";
  }

  return `${Math.floor(distanceKm)} km ${distanceCm} m`;
};

export const calculatePace = (data: PaceInputData): string => {
  const {
    distanceSelectedValue,
    distance: givenDistance,
    time: givenTime,
  } = data;
  const time =
    Number(givenTime.hours * 3600) +
    Number(givenTime.minutes * 60) +
    Number(givenTime.seconds);

  const distance = distanceSelectedValue.id
    ? Number(distanceSelectedValue.id)
    : Number(givenDistance.kilometers) + Number(givenDistance.meters / 1000);

  const paceKm = Math.floor(time / distance);
  const paceMin = Math.floor(paceKm / 60);
  const paceSec = Math.round(paceKm - Math.round(paceMin) * 60);

  if (paceMin + paceSec > 0) {
    return `${paceMin}:${paceSec === 0 ? "00" : paceSec} min / km`;
  }

  return "0:00 min / km";
};

export const sortTableData = (data: TrainingUnitData) => {
  const sortOrder: Array<keyof TrainingUnitData> = [
    "weekId",
    "date",
    TrainingUnitNumber.ONE,
    TrainingUnitNumber.TWO,
    TrainingUnitNumber.THREE,
  ];

  const sortedData: Record<string, TrainingData | string | number | undefined> =
    {};

  sortOrder.forEach((key) => {
    sortedData[key] = data[key];
  });

  return sortedData;
};