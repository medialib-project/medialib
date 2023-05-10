import {
  basicAddonDetails,
  basicAddonResources,
  basicAddonSettings,
} from '@addonlib/addonlib';

export type mediaSourceAddonDetails = {
  type: 'media-source' | (string & {});
} & basicAddonDetails;

export type mediaSourceAddonResources = {} & basicAddonResources;

export type mediaSourceAddonSettings = {} & basicAddonSettings;
