/**
 * Returns a random number between min and max
 * @param min (exclusive)
 * @param max (inclusive)
 * @returns number
 */
export function getRandomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
