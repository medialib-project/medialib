import { EventEmitter } from 'events';
import { compareChanges } from '../utils/compareUtils';
import {
  mediaSourceFetchOption,
  mediaSourceFetchResult,
  mediaSourceSettings,
} from './mediaSourceTypes';
import { optionDefinition, optionUtils } from '@addonlib/addonlib';

//TODO: details?
export default abstract class AbstractMediaSource<
  T extends mediaSourceSettings = mediaSourceSettings,
  U extends mediaSourceFetchOption = mediaSourceFetchOption,
  V extends mediaSourceFetchResult = mediaSourceFetchResult
> extends EventEmitter {
  private settingsDefinition!: optionDefinition<T>;
  private settings: T;

  public constructor(settingsDefinition?: optionDefinition<T>) {
    super();
    this.settingsDefinition = settingsDefinition as optionDefinition<T>;
    this.settings = optionUtils.optionDefinitionToOption(
      this.settingsDefinition
    );
  }

  public getSettingsDefinition(): optionDefinition<T> {
    return this.settingsDefinition;
  }

  public getSettings(): T {
    return this.settings;
  }

  public setSettings(settings: T) {
    const diffs = compareChanges(this.settings, settings) || {};
    this.settings = settings;
    this.emit('settingsChange', this, diffs);
  }

  public abstract fetch(options: U): Promise<V>;

  public abstract getFetchOptionsDefinition(): Promise<optionDefinition<U>>;
}
