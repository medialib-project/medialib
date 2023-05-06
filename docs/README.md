@medialib/medialib / [Exports](modules.md)

# Medialib

# [General informations](../README.md)

# [Documentation](modules.md)

# Exemples

Create a `Media`

```ts
class MyMedia extends AbstractMedia {
  private description: string;

  public constructor({
    id,
    title,
    description,
  }: mediaOptions & { description: string }) {
    super({ id, title });
    this.description = description;
  }

  public getDescription() {
    return this.description;
  }
}

new MyMedia({
  id: '1645',
  title: 'mediaWithDescription',
  description: 'A custom media with an additional `description` field',
});
```

Create a `MediaSource`

```ts
class MyMediaSource extends AbstractMediaSource {
  protected static settingsDefinition: sourceSettingsDefinitionType = {
    languages: { type: 'array', value: { type: 'string' } },
  };
  protected static defaultSettings: sourceSettingsType & {
    languages: Array<string>;
  } = {
    languages: ['en'],
  };

  public constructor(
    settings?: sourceSettingsType & { languages: Array<string> }
  ) {
    super(settings);
  }

  public async fetch(options: sourceOptionsType): Promise<fetchResultType> {
    const medias = [];
    [...Array(options?.limit || 1).keys()].foreach((_, index) =>
      medias.push(
        new MyMedia({
          id: `${index}`,
          title: `media-${index}`,
          description: `media in ${this.getSettings().languages[0]}`,
        })
      )
    );
    return { content: medias };
  }

  public async getFetchOptionsDefinition() {
    return {
      limit: { type: 'integer', value: 1 },
    };
  }
}

(await new MyMediaSource({ languages: ['fr'] }).fetch({ limit: 2 })).content;
```

Create a `WebSource`

```ts
class MyMediaWebSource extends AbstractWebSource {
  protected static settingsDefinition: sourceSettingsDefinitionType = {
    languages: { type: 'array', value: { type: 'string' } },
  };
  protected static defaultSettings: sourceSettingsType & {
    languages: Array<string>;
  } = {
    languages: ['en'],
  };

  protected webInstance!: AxiosInstance;

  public constructor(
    settings?: sourceSettingsType & { languages: Array<string> }
  ) {
    super(settings);
  }

  public resetWebInstance() {
    this.webInstance = this.createAxiosInstance();
  }

  private createAxiosInstance() {
    const { url, userAgent } = this.getSettings();
    return axios.create({
      baseURL: url,
      headers: {
        'User-Agent': userAgent,
      },
    });
  }

  public async fetch(options: sourceOptionsType): Promise<fetchResultType> {
    const queryOptions = {
      languages: languages,
      limit: options?.limit || 1,
    };
    return this.webInstance
      .get('/myMedias', { params: queryOptions })
      .then((res) => {
        content: res.data.map((data) => new MyMedia(data));
      });
  }

  public async getFetchOptionsDefinition() {
    return {
      limit: { type: 'integer', value: 1 },
    };
  }
}
```
