import { fromEdges } from './fromEdges';
import { toEdges } from './toEdges';

/**
 * Flip the directions of the edges in the graph.
 */
export function reverseGraph<T>(graph: Map<T, T[]>): Map<T, T[]> {
  return fromEdges(toEdges(graph).map(([x, y]) => [y, x]));
}
