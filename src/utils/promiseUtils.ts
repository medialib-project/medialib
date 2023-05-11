/**
 * Execute the promises one after the other and reduce what they return.
 *
 * @param array
 * @param promise
 * @param initialValue
 * @returns
 */
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
