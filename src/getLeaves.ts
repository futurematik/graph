/**
 * Get a list of all nodes with no children.
 */
export function getLeaves<T>(graph: Map<T, T[]>): T[] {
  return Array.from(graph.entries()).reduce(
    (a, [k, v]) => (v.length ? a : [...a, k]),
    [] as T[],
  );
}
