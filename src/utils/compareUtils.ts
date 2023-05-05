import { diff } from 'json-diff';
import { diffType } from './diffType';

export function compareChanges(object1: any, object2: any): diffType {
  return diff(object1, object2);
}
