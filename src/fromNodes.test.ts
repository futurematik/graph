/* eslint-disable */
import 'jest';
import { fromNodes } from './fromNodes';
import { sortEntries } from './sortEntries';

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

describe('fromNodes', () => {
  it('builds a correct graph', () => {
    const n6: Node = { key: 6, children: [] };
    const n5: Node = { key: 5, children: [] };
    const n4: Node = { key: 4, children: [n6] };
    const n3: Node = { key: 3, children: [n4, n5] };
    const n2: Node = { key: 2, children: [n6] };
    const n1: Node = { key: 1, children: [n2, n3] };

    const graph = fromNodes(n1, x => x.children);

    // sort for the assertion
    const sorted = sortEntries(graph, (a, b) => a.key - b.key);

    expect(sorted).toEqual([
      [n1, [n2, n3]],
      [n2, [n6]],
      [n3, [n4, n5]],
      [n4, [n6]],
      [n5, []],
      [n6, []],
    ]);
  });
});

interface Node {
  key: number;
  children: Node[];
}
