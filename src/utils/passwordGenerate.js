import getRandomInteger from "./getRandomInteger"

const UPPER = "ABCDEFGHIKLMNOPQRSTVXYZ"
const LOWER = "abcdefghiklmnopqrstvxyz"
const NUMBERS = "0123456789"
const SPECIAL_SIMPLE = "!#$%&*_+=-^~?;:.,|"
const SPECIAL_AMBIGUOUS = "\"()'`´{[]}/><"

const DEFAULT_CONFIG = {
  length: 16,
  upper: true,
  lower: true,
  numbers: true,
  specialSimple: true,
  specialAmbiguous: true,
}

/**
 * Generate a new password
 * 
 * @param {DEFAULT_CONFIG} config - config for create password
 * @return {string} newPassword
 *
 * @author Clairton luz <clairton.luz@gmail.com>
 * 
 * @example
 * const value = passwordGenerate({
 *   length: 16, // default value
 *   upper: true, // default value
 *   lower: true, // default value
 *   numbers: true, // default value
 *   specialSimple: true, // default value
 *   specialAmbiguous: true, // default value
 * })
 *
 */
export default config => {
  const { length, upper, lower, numbers, specialSimple, specialAmbiguous } = {
    ...DEFAULT_CONFIG,
    ...config,
  }
  let caractersAvaliable = ""
  if (upper) caractersAvaliable += UPPER
  if (lower) caractersAvaliable += LOWER
  if (numbers) caractersAvaliable += NUMBERS
  if (specialSimple) caractersAvaliable += SPECIAL_SIMPLE
  if (specialAmbiguous) caractersAvaliable += SPECIAL_AMBIGUOUS

  let value = ""
  for (let i = 0; i < length; i++) {
    let randomInt = getRandomInteger(0, caractersAvaliable.length)
    value += caractersAvaliable[randomInt]
  }

  return value
}
