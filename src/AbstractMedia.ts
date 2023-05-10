import { basicMediaDetails } from './mediaTypes';

export default class AbstractMedia<
  T extends basicMediaDetails = basicMediaDetails
> {
  public constructor(private details: T) {}

  public getDetails() {
    return this.details;
  }
}
