/* eslint-disable */
import 'jest';
import { fromEdges } from './fromEdges';

describe('fromEdges', () => {
  it('builds the expected map', () => {
    const graph = fromEdges([[1, 2], [1, 3], [3, 4], [3, 5], [3, 6]]);

    const entries = Array.from(graph.entries()).sort(([k1], [k2]) => k1 - k2);

    expect(entries).toEqual([
      [1, [2, 3]],
      [2, []],
      [3, [4, 5, 6]],
      [4, []],
      [5, []],
      [6, []],
    ]);
  });
});
