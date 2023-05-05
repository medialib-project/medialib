type diff = { __old: any; __new: any };

export type diffType = {
  [key: string]: diff | diffType;
};
