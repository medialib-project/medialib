import { AbstractAddonManager } from '@addonlib/addonlib';
import AbstractMediaSourceAddon from './AbstractMediaSourceAddon';
import { mediaSourceAddonManagerDetails } from './mediaSourceAddonManagerTypes';

export default class MediaSourceAddonManager<
  T extends mediaSourceAddonManagerDetails = mediaSourceAddonManagerDetails,
  V extends AbstractMediaSourceAddon = AbstractMediaSourceAddon
> extends AbstractAddonManager<T, V> {
  constructor(details?: T) {
    super({ ...{ type: 'media-source' }, ...details } as T);
  }
}
