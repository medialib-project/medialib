import { AbstractAddonManager } from '@addonlib/addonlib';
import AbstractMediaSourceAddon from './AbstractMediaSourceAddon';

export default class AddonMediaSourceManager extends AbstractAddonManager {
  static type = 'media-source';

  constructor(...sourcesAddons: Array<AbstractMediaSourceAddon>) {
    super(...sourcesAddons);
  }
}
