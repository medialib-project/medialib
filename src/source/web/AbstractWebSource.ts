import { diffType } from '../../utils/diffType';
import AbstractMediaSource from '../AbstractMediaSource';
import {
  sourceSettingsDefinitionType,
  sourceSettingsType,
} from '../sourceSettingsType';

export default abstract class AbstractWebSource extends AbstractMediaSource {
  protected static settingsDefinition: sourceSettingsDefinitionType = {
    url: { type: 'string' },
    userAgent: { type: 'string' },
  };
  protected static defaultSettings: sourceSettingsType = {
    url: undefined,
    userAgent: undefined,
  };

  protected webInstance: any;

  public constructor(settings?: sourceSettingsType) {
    super(settings);
    this.resetWebInstance();
    this.on('settingsChange', this.onSettingsChange);
  }

  public onSettingsChange(_: AbstractMediaSource, changes: diffType) {
    if (
      Object.keys(changes).some((changedField) =>
        ['url', 'userAgent'].includes(changedField)
      )
    )
      this.resetWebInstance();
  }

  public abstract resetWebInstance(): void;
}
