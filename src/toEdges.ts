/**
 * Get an array with one [source, target] pair per edge.
 */
export function toEdges<T>(graph: Map<T, T[]>): [T, T][] {
  const ret: [T, T][] = [];

  for (const [k, v] of graph.entries()) {
    ret.push(...v.map(x => [k, x] as [T, T]));
  }

  return ret;
}
