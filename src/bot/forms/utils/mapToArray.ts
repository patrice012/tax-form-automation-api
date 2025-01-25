/**
 * Transforms an array of input values into a structured format.
 *
 * @param {unknown[]} value - The input value(s) to be transformed. It can be a single value, an array of values,
 * or an array containing arrays. Each inner array represents a row of inputs in a table column.
 *
 * @returns {Array<[string, string]>} - Returns a two-dimensional array where each inner array represents
 * a row of two inputs (`[a, b]` format) in a table column. If the input is not already structured, it is
 * normalized into the desired format.
 *
 * ### How it works:
 * 1. **Normalization**:
 *    - If `value` is not already an array, it is wrapped in an array for consistent processing.
 * 2. **Filtering**:
 *    - Removes any falsy values (`null`, `undefined`, `false`, `0`, `NaN`, or empty string) from the array.
 * 3. **Transformation**:
 *    - If an item in the array is already an array, it is left as is.
 *    - Otherwise, it is transformed into an array of the form `["", item]`, where `""` is a placeholder
 *      for the first input in the row if no explicit first input exists.
 *
 * ### Example Usage:
 * ```javascript
 * mapToArray(["a", "b", ["c", "d"], null, undefined]);
 * // Output: [["", "a"], ["", "b"], ["c", "d"]]
 *
 * mapToArray("a");
 * // Output: [["", "a"]]
 *
 * mapToArray([["x", "y"], ["z", "w"]]);
 * // Output: [["x", "y"], ["z", "w"]]
 *
 *  mapToArray([["z"]]);
 * // Output: [["", "z"]]
 * ```
 */
export function mapToArray(value: unknown[]): [string, string][] {
  const _value = Array.isArray(value) ? value : [value];
  return _value
    .filter((item) => item)
    .map((item) => {
      if (Array.isArray(item)) {
        const first = item.length === 1 ? "" : item?.at(0) || "";
        const second =
          item.length === 1 ? item?.at(0) || "" : item?.at(1) || "";
        return [String(first), String(second)];
      }
      return ["", String(item)];
    });
}
