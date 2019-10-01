/**
 * Returns true if the graph contains a cycle reachable from the given node.
 */
export function hasCycles<T>(graph: Map<T, T[]>, from: T): boolean {
  const stack: [T[], T][] = [];

  for (
    let [path, current] = [[] as T[], from];
    typeof current !== 'undefined';
    [path, current] = stack.pop() || [[] as T[], undefined!]
  ) {
    if (path.indexOf(current) >= 0) {
      return true;
    }
    const children = graph.get(current) || [];

    const newPath = [...path, current];
    stack.push(...children.map(x => [newPath, x] as [T[], T]));
  }

  return false;
}
