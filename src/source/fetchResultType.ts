import AbstractMedia from '../AbstractMedia';

export interface fetchResultType {
  content: Array<AbstractMedia>;
  [key: string]: any;
}
