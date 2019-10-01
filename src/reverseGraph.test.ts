/* eslint-disable */
import 'jest';
import { reverseGraph } from './reverseGraph';
import { sortEntries } from './sortEntries';

describe('reverseGraph', () => {
  it('flips the direction of the edges', () => {
    const graph = new Map([
      [1, [2, 3, 4]],
      [2, [5]],
      [3, []],
      [4, [6, 8]],
      [5, [7]],
      [6, [5]],
      [7, [8]],
      [8, []],
    ]);

    const reverse = sortEntries(reverseGraph(graph));

    expect(reverse).toEqual([
      [1, []],
      [2, [1]],
      [3, [1]],
      [4, [1]],
      [5, [2, 6]],
      [6, [4]],
      [7, [5]],
      [8, [4, 7]],
    ]);
  });
});
