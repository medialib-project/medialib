export function chainPromisesOnArray<T, V>(
  array: Array<T>,
  promise: (element: T, results: V, index: number) => Promise<V>,
  initialValue: V
) {
  return array.reduce(
    (p, element, index) =>
      //@ts-ignore
      p.then(async (results) => await promise(element, results, index)),
    Promise.resolve(initialValue)
  ) as unknown as V;
}
