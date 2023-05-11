import { diff } from 'json-diff';
import { diffType } from './diffType';

/**
 * Compare two objects and redurn the result of the comparison.
 *
 * @param object1
 * @param object2
 * @returns
 */
export function compareChanges(object1: any, object2: any): diffType {
  return diff(object1, object2);
}
