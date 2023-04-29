import { describe, expect, it } from "vitest";
import { cities, search } from "./search-feature";

describe("search feature", () => {
  it("should return empty when seach if fewer then 2 chars", () => {
    expect(search("")).toEqual([]);
    expect(search("a")).toEqual([]);
  });

  it("should return cities starting with the exact search term", () => {
    expect(search("Bud")).toEqual(["Budapest"]);
    expect(search("Va")).toEqual(["Valencia", "Vancouver"]);
  });

  it("should be case insensitive", () => {
    expect(search("bud")).toEqual(["Budapest"]);
    expect(search("va")).toEqual(["Valencia", "Vancouver"]);
  });

  it("should work when input is partial of the city", () => {
    expect(search("apes")).toEqual(["Budapest"]);
    expect(search("encia")).toEqual(["Valencia"]);
  });

  it("should return all cities if input is '*'", () => {
    expect(search("*")).toEqual(cities);
  });
});
