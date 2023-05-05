import { EventEmitter } from 'events';
import { compareChanges } from '../utils/compareUtils';
import {
  sourceSettingsDefinitionType,
  sourceSettingsType,
} from './sourceSettingsType';
import {
  sourceOptionsDefinitionType,
  sourceOptionsType,
} from './sourceOptionsType';
import { fetchResultType } from './fetchResultType';

export default abstract class AbstractMediaSource extends EventEmitter {
  protected static settingsDefinition: sourceSettingsDefinitionType = {};
  protected static defaultSettings: sourceSettingsType = {};

  private settings: sourceSettingsType;

  public constructor(settings?: sourceSettingsType) {
    super();
    this.settings = { ...this.getDefaultSettings(), ...(settings || {}) };
  }

  public static getSettingsDefinition() {
    return this.settingsDefinition;
  }

  public static getDefaultSettings() {
    return this.defaultSettings;
  }

  public getSettingsDefinition(): sourceSettingsDefinitionType {
    //@ts-ignore
    return this.constructor.getSettingsDefinition();
  }

  public getDefaultSettings(): sourceSettingsType {
    //@ts-ignore
    return this.constructor.getDefaultSettings();
  }

  public getSettings() {
    return this.settings;
  }

  public setSettings(settings: sourceSettingsType) {
    const oldSettings = this.settings;
    this.settings = settings;
    const diffs = compareChanges(oldSettings, this.settings);
    if (Object.keys(diffs).length != 0)
      this.emit('settingsChange', this, diffs);
  }

  public async fetch(options: sourceOptionsType): Promise<fetchResultType> {
    return { content: [] };
  }

  public async getFetchOptionsDefinition(): Promise<sourceOptionsDefinitionType> {
    return {};
  }
}
