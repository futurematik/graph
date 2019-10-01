/* eslint-disable */
import 'jest';
import { getAdjacencies } from './getAdjacencies';

/**
 * graph looks like this:
 *
 *               1
 *              / \
 *             2   3
 *              \   \-----\
 *               \   4    5
 *                \ /
 *                 6
 */

describe('getAdjacencies', () => {
  it('returns the correct adjacencies', () => {
    const graph = new Map([
      [1, [2, 3]],
      [2, [6]],
      [3, [4, 5]],
      [4, [6]],
      [5, []],
    ]);

    const adj = Array.from(getAdjacencies(graph, 1).entries()).sort(
      ([k1], [k2]) => k1 - k2,
    );

    expect(adj).toEqual([[1, 0], [2, 1], [3, 1], [4, 2], [5, 2], [6, 2]]);
  });
});
