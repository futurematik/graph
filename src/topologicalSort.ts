export function topologicalSort<T>(graph: Map<T, T[]>): T[] {
  const ret: T[] = [];

  const unvisited = new Map(graph.entries());

  function visit(n: T, path: T[] = []): void {
    const children = unvisited.get(n);
    if (!children) {
      return;
    }
    if (path.indexOf(n) >= 0) {
      throw new Error(`cyclic reference ` + path.concat(n).join(' -> '));
    }
    for (const m of children) {
      visit(m, path.concat(n));
    }
    unvisited.delete(n);
    ret.unshift(n);
  }

  while (unvisited.size) {
    visit(unvisited.keys().next().value!);
  }

  return ret;
}
