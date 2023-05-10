import { optionDefinition } from '@addonlib/addonlib';
import { diffType } from '../../utils/diffType';
import AbstractMediaSource from '../AbstractMediaSource';
import {
  webMediaSourceFetchOption,
  webMediaSourceFetchResult,
  webMediaSourceSettings,
} from './webMediaSourceTypes';

export default abstract class AbstractWebMediaSource<
  T extends webMediaSourceSettings = webMediaSourceSettings,
  U extends webMediaSourceFetchOption = webMediaSourceFetchOption,
  V extends webMediaSourceFetchResult = webMediaSourceFetchResult
> extends AbstractMediaSource<T, U, V> {
  //TODO: webInstance in constructor? yes
  //TODO: type `webInstance`
  protected webInstance: any;

  public constructor(settingsDefinition?: optionDefinition<T>) {
    super(settingsDefinition);
    this.resetWebInstance();
    this.on('settingsChange', this.onSettingsChange);
  }

  public onSettingsChange(_: AbstractWebMediaSource, changes: diffType) {
    if (
      Object.keys(changes).some((changedField) =>
        ['url', 'userAgent'].includes(changedField)
      )
    )
      this.resetWebInstance();
  }

  public abstract resetWebInstance(): void;
}
