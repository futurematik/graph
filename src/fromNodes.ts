/**
 * Build a graph structure from an arbitrary graph type.
 */
export function fromNodes<T>(
  root: T,
  getChildren: (node: T) => T[],
): Map<T, T[]> {
  const graph = new Map<T, T[]>();
  const queue: T[] = [];

  for (
    let current = root;
    typeof current !== 'undefined';
    current = queue.shift()!
  ) {
    if (graph.has(current)) {
      // already visited
      continue;
    }

    const children = getChildren(current);
    graph.set(current, children);
    queue.push(...children);
  }

  return graph;
}
