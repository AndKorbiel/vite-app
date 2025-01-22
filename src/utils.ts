import { DistanceInputData, PaceInputData } from "./types";

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

export const calculatePace = (data: PaceInputData): string => {
  const time =
    Number(data.timeHours * 3600) +
    Number(data.timeMinutes * 60) +
    Number(data.timeSeconds);

  const distance = data.distanceSelectedValue.id
    ? Number(data.distanceSelectedValue.id)
    : Number(data.distanceKilometers) + Number(data.distanceMeters / 1000);

  const paceKm = Math.floor(time / distance);
  const paceMin = Math.floor(paceKm / 60);
  const paceSec = Math.round(paceKm - Math.round(paceMin) * 60);

  if (paceMin + paceSec > 0) {
    return `${paceMin}:${paceSec === 0 ? "00" : paceSec} min / km`;
  }

  return "0:00 min / km";
};
