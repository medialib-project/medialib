import { mediaOptions } from './mediaType';

export default class AbstractMedia {
  private id: string;
  private title: string;

  public constructor({ id, title }: mediaOptions) {
    this.id = id;
    this.title = title;
  }

  public getId() {
    return this.id;
  }

  public getTitle() {
    return this.title;
  }
}
