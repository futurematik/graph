/* eslint-disable */
import 'jest';
import { getLeaves } from './getLeaves';

describe('leaves', () => {
  it('returns the leaf nodes', () => {
    const graph = new Map([
      [1, [2, 3]],
      [2, []],
      [3, [4, 5, 6]],
      [4, []],
      [5, []],
      [6, []],
    ]);

    const leafNodes = getLeaves(graph).sort((a, b) => a - b);

    expect(leafNodes).toEqual([2, 4, 5, 6]);
  });
});
