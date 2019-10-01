# @fmtk/graph

This library includes some functions for working with graph structures.

## Basics

A graph is represented by a `Map<T, T[]>` – i.e. a map that has a key for each vertex, with the value being an array of children. Note that leaf nodes will be present with an empty array of children.

A graph can also be represented by a list of edges (`[T, T][]`). Each element in the array is a 2-element array with the source as the first element and the target as the second.

## Functions

### fromEdges

Build a `Map<T, T[]>` from a list of edges (`[T, T][]`).

```typescript
function fromEdges<T>(edges: [T, T][]): Map<T, T[]>;
```

### fromNodes

Build a `Map<T, T[]>` from an existing arbitrary graph structure.

```typescript
function fromNodes<T>(root: T, getChildren: (node: T) => T[]): Map<T, T[]>;
```

### getLeaves

Get an array of leaf nodes (nodes with no children) from the given graph.

```typescript
function getLeaves<T>(graph: Map<T, T[]>): T[];
```

### hasCycles

Returns true if the graph contains a cycle reachable from the given node.

```typescript
function hasCycles<T>(graph: Map<T, T[]>, from: T): boolean;
```

### toEdges

Build a list of edges (`[T, T][]`) from a graph map (`Map<T, T[]>`).

```typescript
function toEdges<T>(graph: Map<T, T[]>): [T, T][];
```

### topologicalSort

Build a list of all nodes, sorted in an order such that for any given node, all nodes which point to that node come first in the list.

```typescript
function topologicalSort<T>(graph: Map<T, T[]>): T[];
```
