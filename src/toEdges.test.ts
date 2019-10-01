/* eslint-disable */
import 'jest';
import { toEdges } from './toEdges';

describe('toEdges', () => {
  it('returns the expected edge list', () => {
    const graph = new Map([
      [1, [2, 3]],
      [2, []],
      [3, [4, 5, 6]],
      [4, []],
      [5, []],
      [6, []],
    ]);

    const edges = toEdges(graph);

    expect(edges).toEqual([[1, 2], [1, 3], [3, 4], [3, 5], [3, 6]]);
  });
});
