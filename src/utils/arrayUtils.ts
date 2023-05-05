export function splitArrayInMaxSizeChunks<T>(array: Array<T>, limit: number) {
  return array
    .map((_, i) => {
      return i % limit === 0 ? array.slice(i, i + limit) : null;
    })
    .filter((element) => element) as Array<Array<T>>;
}
