import { getNumber } from "./utils";
import { describe, expect, it } from "vitest";

describe('getNumber', () => {
  it("should work", () => {
    expect(getNumber(2)).toBe(4);
  });
})

