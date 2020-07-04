import passwordGenerate from "./passwordGenerate"

describe("passwordGenerate", () => {
  it("should generate password with lenght 16 by default", () => {
    const actual = passwordGenerate()
    expect(actual).not.toBeNull()
    expect(actual).not.toBeUndefined()
    expect(actual).toHaveLength(16)
  })
})
