export function getAdjacencies<T>(graph: Map<T, T[]>, from: T): Map<T, number> {
  const adjacencies = new Map<T, number>();
  const queue: [T, number][] = [];

  for (
    let [current, level] = [from, 0];
    level >= 0;
    [current, level] = queue.shift() || [current, -1]
  ) {
    adjacencies.set(current, level);
    const children = graph.get(current) || [];

    // we add only children not already visited.
    // since it's breadth-first, this means we always get the shortest path
    queue.push(
      ...children
        .filter(x => !adjacencies.has(x))
        .map(x => [x, level + 1] as [T, number]),
    );
  }

  return adjacencies;
}
