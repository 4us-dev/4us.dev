import getRandomInteger from "./getRandomInteger"

describe("getRandomInteger", () => {
  it("should return random int value between 0 and 10", () => {
    const min = 0
    const max = 10
    const actual = getRandomInteger(min, max)
    expect(actual).toBeGreaterThanOrEqual(min)
    expect(actual).toBeLessThanOrEqual(max)
  })

  it("should return exact number when min and max is equal", () => {
    expect(getRandomInteger(0, 0)).toBe(0)
    expect(getRandomInteger(23, 23)).toBe(23)
    expect(getRandomInteger(1111, 1111)).toBe(1111)
  })

  it("should return random int value between 1000 and 1001", () => {
    const min = 1000
    const max = 1001
    const actual = getRandomInteger(min, max)
    expect(actual).toBeGreaterThanOrEqual(min)
    expect(actual).toBeLessThanOrEqual(max)
  })
})
