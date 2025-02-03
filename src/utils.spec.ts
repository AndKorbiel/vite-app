import { describe, expect, it } from "vitest";
import {
  calculateDistance,
  calculatePace,
  transferDrawerFormData,
} from "./utils";
import { PaceInputData, TrainingInputData } from "./types";

describe("calculateDistance", () => {
  it('should return "0km 0m" when all inputs are 0', () => {
    const data = {
      paceMinutes: 0,
      paceSeconds: 0,
      timeHours: 0,
      timeMinutes: 0,
      timeSeconds: 0,
    };

    expect(calculateDistance(data)).toBe("0 km 0 m");
  });

  it("should return correct distance for given pace and time - test case 1", () => {
    const data = {
      paceMinutes: 5,
      paceSeconds: 30,
      timeHours: 0,
      timeMinutes: 60,
      timeSeconds: 0,
    };

    expect(calculateDistance(data)).toBe("10 km 909 m");
  });

  it("should return correct distance for given pace and time - test case 2", () => {
    const data = {
      paceMinutes: 6,
      paceSeconds: 0,
      timeHours: 1,
      timeMinutes: 30,
      timeSeconds: 0,
    };

    expect(calculateDistance(data)).toBe("15 km 0 m");
  });
});

describe("calculatePace", () => {
  it('should return "0:00 min / km" when all inputs are 0', () => {
    const data: PaceInputData = {
      timeHours: 0,
      timeMinutes: 0,
      timeSeconds: 0,
      distanceKilometers: 0,
      distanceMeters: 0,
      distanceSelectedValue: { id: 0, label: "" },
    };

    expect(calculatePace(data)).toBe("0:00 min / km");
  });

  it("should return correct pace for given time and distance - test case 1", () => {
    const data = {
      timeHours: 1,
      timeMinutes: 0,
      timeSeconds: 0,
      distanceKilometers: 10,
      distanceMeters: 0,
      distanceSelectedValue: { id: 0, label: "" },
    };

    expect(calculatePace(data)).toBe("6:00 min / km");
  });

  it("should return correct pace for given time and distance - test case 2", () => {
    const data = {
      timeHours: 1,
      timeMinutes: 15,
      timeSeconds: 30,
      distanceKilometers: 12,
      distanceMeters: 90,
      distanceSelectedValue: { id: 0, label: "" },
    };

    expect(calculatePace(data)).toBe("6:14 min / km");
  });

  it("should return correct pace for given time and distance - test case 3", () => {
    const data = {
      timeHours: 1,
      timeMinutes: 15,
      timeSeconds: 30,
      distanceKilometers: 12,
      distanceMeters: 90,
      distanceSelectedValue: { id: 21.297, label: "Half Marathon" },
    };

    expect(calculatePace(data)).toBe("3:32 min / km");
  });
});

describe("transferDrawerFormData", () => {
  const data: TrainingInputData = {
    distanceKilometers: 0,
    distanceMeters: 0,
    paceMinutes: 0,
    paceSeconds: 0,
    pulse: 0,
    timeHours: 0,
    timeMinutes: 0,
    timeSeconds: 0,
  };

  it("should return correct data when all inputs are 0", () => {
    expect(transferDrawerFormData(data)).toEqual({
      distance: { kilometers: 0, meters: 0 },
      pace: { minutes: 0, seconds: 0 },
      pulse: 0,
      time: { hours: 0, minutes: 0, seconds: 0 },
    });
  });

  it("should return correct data when all inputs are 0", () => {
    expect(
      transferDrawerFormData({
        ...data,
        distanceKilometers: 10,
        paceMinutes: 5,
        paceSeconds: 30,
        timeHours: 1,
        pulse: 144,
      })
    ).toEqual({
      distance: { kilometers: 10, meters: 0 },
      pace: { minutes: 5, seconds: 30 },
      pulse: 144,
      time: { hours: 1, minutes: 0, seconds: 0 },
    });
  });
});