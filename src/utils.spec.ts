import { describe, expect, it } from "vitest";
import { calculateDistance, calculatePace } from "./utils";
import { PaceInputData } from "./types/inputsData";

describe("calculateDistance", () => {
  it('should return "0km 0m" when all inputs are 0', () => {
    const data = {
      pace: { minutes: 0, seconds: 0 },
      time: { hours: 0, minutes: 0, seconds: 0 },
    };

    expect(calculateDistance(data)).toBe("0 km 0 m");
  });

  it("should return correct distance for given pace and time - test case 1", () => {
    const data = {
      pace: { minutes: 5, seconds: 30 },
      time: { hours: 0, minutes: 60, seconds: 0 },
    };

    expect(calculateDistance(data)).toBe("10 km 909 m");
  });

  it("should return correct distance for given pace and time - test case 2", () => {
    const data = {
      pace: { minutes: 6, seconds: 0 },
      time: { hours: 1, minutes: 30, seconds: 0 },
    };

    expect(calculateDistance(data)).toBe("15 km 0 m");
  });
});

describe("calculatePace", () => {
  it('should return "0:00 min / km" when all inputs are 0', () => {
    const data: PaceInputData = {
      distance: { kilometers: 0, meters: 0 },
      distanceSelectedValue: { id: 0, label: "" },
      time: { hours: 0, minutes: 0, seconds: 0 },
    };

    expect(calculatePace(data)).toBe("0:00 min / km");
  });

  it("should return correct pace for given time and distance - test case 1", () => {
    const data = {
      distance: { kilometers: 10, meters: 0 },
      distanceSelectedValue: { id: 0, label: "" },
      time: { hours: 1, minutes: 0, seconds: 0 },
    };

    expect(calculatePace(data)).toBe("6:00 min / km");
  });

  it("should return correct pace for given time and distance - test case 2", () => {
    const data = {
      distance: { kilometers: 12, meters: 90 },
      distanceSelectedValue: { id: 0, label: "" },
      time: { hours: 1, minutes: 15, seconds: 30 },
    };

    expect(calculatePace(data)).toBe("6:14 min / km");
  });

  it("should return correct pace for given time and distance - test case 3", () => {
    const data = {
      distance: { kilometers: 12, meters: 90 },
      distanceSelectedValue: { id: 21.297, label: "Half Marathon" },
      time: { hours: 1, minutes: 15, seconds: 30 },
    };

    expect(calculatePace(data)).toBe("3:32 min / km");
  });
});