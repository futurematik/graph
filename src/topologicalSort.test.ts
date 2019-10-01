/* eslint-disable */
import 'jest';
import { topologicalSort } from './topologicalSort';

describe('topologicalSort', () => {
  it('sorts the nodes accordingly', () => {
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

    const sorted = topologicalSort(graph);

    expectDeps(sorted, 8, 7, 4);
    expectDeps(sorted, 7, 5);
    expectDeps(sorted, 6, 4);
    expectDeps(sorted, 5, 6, 2);
    expectDeps(sorted, 4, 1);
    expectDeps(sorted, 3, 1);
    expectDeps(sorted, 2, 1);
    expect(sorted.indexOf(1)).toBe(0);
  });
});

function expectDeps<T>(arr: T[], target: T, ...before: T[]) {
  const i = arr.indexOf(target);

  for (const b of before) {
    expect(arr.indexOf(b)).toBeLessThan(i);
  }
}
