/**
 * Return the value of the first preference key found in the object.
 *
 * @param object
 * @param preferences
 * @returns
 */
export function getValueFromKeysWithPreferencesOrFirst(
  object: any,
  preferences: Array<string>
) {
  let preferedKey = preferences.find((pref) => object[pref] != null);
  preferedKey = preferedKey || Object.keys(object).find(Boolean);
  return preferedKey ? object[preferedKey] : undefined;
}
