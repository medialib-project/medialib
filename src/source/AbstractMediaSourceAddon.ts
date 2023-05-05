import { AbstractAddon, addonResourcesType } from '@addonlib/addonlib';
import AbstractMediaSource from './AbstractMediaSource';
import { sourceSettingsType } from './sourceSettingsType';

export default abstract class AbstractMediaSourceAddon extends AbstractAddon {
  protected static type = 'media-source';

  private source: AbstractMediaSource;

  public constructor(
    resources: addonResourcesType,
    settings: sourceSettingsType = {}
  ) {
    super(resources);
    //@ts-ignore
    this.source = new this.getSourceClass()(settings);
  }

  public abstract getSourceClass(): AbstractMediaSource;

  public getSource() {
    return this.source;
  }
}
