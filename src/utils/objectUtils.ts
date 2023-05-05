export function getValueFromKeysWithPreferencesOrFirst(
  object: any,
  preferences: Array<string>
) {
  let preferedKey = preferences.find((pref) => object[pref] != null);
  preferedKey = preferedKey || Object.keys(object).find(Boolean);
  return preferedKey ? object[preferedKey] : undefined;
}
