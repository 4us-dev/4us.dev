
/**
 * Generate a random integer between min and max values
 * 
 * @param {number} min
 * @param {number} max
 * @return {number} randomInt - random integer between min and max
 *
 * @author Clairton luz <clairton.luz@gmail.com>
 * 
 * @example
 * const value = getRandomInteger(0, 3) // the return can be one of this values 0, 1, 2 or 3
 */
export default (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}