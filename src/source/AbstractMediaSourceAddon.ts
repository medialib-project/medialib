import { AbstractAddon, optionDefinition } from '@addonlib/addonlib';
import AbstractMediaSource from './AbstractMediaSource';
import {
  mediaSourceAddonDetails,
  mediaSourceAddonResources,
} from './mediaSourceAddonTypes';
import { mediaSourceSettings } from './mediaSourceTypes';

export default abstract class AbstractMediaSourceAddon<
  T extends AbstractMediaSource = AbstractMediaSource,
  U extends mediaSourceAddonDetails = mediaSourceAddonDetails,
  V extends mediaSourceAddonResources = mediaSourceAddonResources,
  W extends mediaSourceSettings = mediaSourceSettings
> extends AbstractAddon {
  private source!: T;

  public constructor(resources: V, details?: U, sourceClass?: new () => T) {
    super(resources, {
      ...{ type: 'media-source' },
      ...details,
    } as U);
    this.source = new (sourceClass as new () => T)();
  }

  public getSource() {
    return this.source;
  }

  public getSettings(): W {
    return this.getSource().getSettings() as W;
  }

  public setSettings(settings: W) {
    this.getSource().setSettings(settings);
  }

  public getSettingsDefinition(): optionDefinition<W> {
    return this.getSource().getSettingsDefinition() as optionDefinition<W>;
  }
}
