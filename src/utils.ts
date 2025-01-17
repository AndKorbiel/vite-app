import { DistanceInputData } from "./types";

export const calculateDistance = (data: DistanceInputData): string => {
  const pace = Number(data.paceMinutes * 60) + Number(data.paceSeconds);

  const time =
    Number(data.timeHours * 3600) +
    Number(data.timeMinutes * 60) +
    Number(data.timeSeconds);

  const distanceKm = Math.floor(time / pace);
  const distanceCm = Math.round((time / pace) * 1000 - distanceKm * 1000);

  if (isNaN(distanceKm) || isNaN(distanceCm)) {
    return "0km 0m";
  }

  return `${Math.floor(distanceKm)} km ${distanceCm} m`;
};
