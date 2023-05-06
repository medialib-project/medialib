export interface settingDefinition {
  type: any;
  value?: settingDefinition;
}

export interface sourceSettingsDefinitionType {
  [key: string]: settingDefinition;
}

export interface sourceSettingsType {
  [key: string]: any;
}
