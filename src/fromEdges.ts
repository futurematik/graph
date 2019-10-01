/**
 * Build a map that has one key for each node, each with a value which is an
 * array of its child nodes.
 */
export function fromEdges<T>(edges: [T, T][]): Map<T, T[]> {
  return edges.reduce(
    (map, [k, v]) =>
      map.set(k, (map.get(k) || []).concat(v)).set(v, map.get(v) || []),
    new Map<T, T[]>(),
  );
}
