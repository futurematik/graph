/* eslint-disable */
import 'jest';
import { hasCycles } from './hasCycles';

describe('hasCycles', () => {
  it('returns true if there is a cycle', () => {
    const graph = new Map([
      [1, [2, 3]],
      [2, [4, 5]],
      [3, [1]],
      [4, []],
      [5, []],
    ]);

    const result = hasCycles(graph, 1);

    expect(result).toBe(true);
  });

  it('returns false if there is not a cycle', () => {
    const graph = new Map([
      [1, [2, 3, 5]],
      [2, [4, 5]],
      [3, []],
      [4, []],
      [5, []],
    ]);

    const result = hasCycles(graph, 1);

    expect(result).toBe(false);
  });
});
