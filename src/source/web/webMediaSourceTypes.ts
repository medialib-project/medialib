import AbstractMedia from '../../AbstractMedia';
import {
  mediaSourceFetchOption,
  mediaSourceFetchResult,
  mediaSourceSettings,
} from '../mediaSourceTypes';

export type webMediaSourceSettings = {
  url: string;
  userAgent: string;
} & mediaSourceSettings;

export type webMediaSourceFetchOption = {
  limit?: number;
  offset?: number;
} & mediaSourceFetchOption;

export type webMediaSourceFetchResult<T extends AbstractMedia = AbstractMedia> =
  {
    limit?: number;
    offset?: number;
    total?: number;
  } & mediaSourceFetchResult<T>;
