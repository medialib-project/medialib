import { optionDefinition } from '@addonlib/addonlib';
import AbstractMedia from '../AbstractMedia';
import { basicMediaDetails } from '../mediaTypes';
import AbstractMediaSource from '../source/AbstractMediaSource';
import {
  mediaSourceFetchOption,
  mediaSourceFetchResult,
  mediaSourceSettings,
} from '../source/mediaSourceTypes';

type MyMediaDetails = { description: string } & basicMediaDetails;

class MyMedia<
  T extends MyMediaDetails = MyMediaDetails
> extends AbstractMedia<T> {}

type myMediaSourceFetchOption = { title: string } & mediaSourceFetchOption;

class MyMediaSource<
  T extends mediaSourceSettings = mediaSourceSettings,
  U extends myMediaSourceFetchOption = myMediaSourceFetchOption,
  V extends mediaSourceFetchResult = mediaSourceFetchResult
> extends AbstractMediaSource<T, U, V> {
  public fetch(options: U): Promise<V> {
    return Promise.resolve({
      content: [
        new MyMedia({
          title: options.title,
          description: 'description of ' + options.title,
          id: 'id-' + options.title,
        }),
      ],
    } as unknown as V);
  }
  public getFetchOptionsDefinition(): Promise<optionDefinition<U>> {
    return Promise.resolve({
      title: {
        type: 'string',
        required: true,
      },
    } as unknown as optionDefinition<U>);
  }
}

const myMediaSource = new MyMediaSource();

myMediaSource
  .fetch({ title: 'wantedTitle' })
  .then((res) => res.content)
  .then((content) => console.log(content));
