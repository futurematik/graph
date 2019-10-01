export function sortEntries(map: Map<number, number[]>): [number, number[]][];
export function sortEntries<T>(
  map: Map<T, T[]>,
  sort: (a: T, b: T) => number,
): [T, T[]][];
export function sortEntries(
  map: Map<unknown, unknown[]>,
  sort?: (a: unknown, b: unknown) => number,
): [unknown, unknown[]][] {
  if (!sort) {
    sort = (a, b) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error(`don't know how to sort keys`);
      }
      return a - b;
    };
  }
  return Array.from(
    map.entries(),
    ([k, v]) => [k, v.sort(sort)] as [number, number[]],
  ).sort(([k1], [k2]) => sort!(k1, k2));
}
