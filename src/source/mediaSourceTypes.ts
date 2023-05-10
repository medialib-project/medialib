import AbstractMedia from '../AbstractMedia';

export type mediaSourceSettings = {} & Record<string, unknown>;

export type mediaSourceFetchOption = {} & Record<string, unknown>;

export type mediaSourceFetchResult<T extends AbstractMedia = AbstractMedia> = {
  content: Array<T>;
} & Record<string, unknown>;
