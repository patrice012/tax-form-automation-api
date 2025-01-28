/**
 * Generates a random integer within a specified range.
 *
 * @param range - An object containing the range parameters:
 *   - min (optional): The lower limit for the index (inclusive). Defaults to 0 if not provided.
 *   - max: The upper limit for the index (exclusive). Must be greater than min.
 * @returns A random integer between min (inclusive) and max (exclusive).
 *          If max is not greater than min, it logs a warning and returns min.
 */
export function getRandomIndex(range: { min?: number; max: number }): number {
  const { min = 0, max } = range;

  if (max <= min) {
    console.warn(
      `Invalid range: max (${max}) must be greater than min (${min}). Returning min as fallback.`,
    );
    return min;
  }

  return Math.floor(Math.random() * (max - min)) + min;
}
