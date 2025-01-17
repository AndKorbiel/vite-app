import { describe, expect, it } from "vitest";
import { calculateDistance } from "./utils";

describe("calculateDistance", () => {
  it('should return "0km 0m" when all inputs are 0', () => {
    const data = {
      paceMinutes: 0,
      paceSeconds: 0,
      timeHours: 0,
      timeMinutes: 0,
      timeSeconds: 0,
    };

    expect(calculateDistance(data)).toBe("0km 0m");
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
