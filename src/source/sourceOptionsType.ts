export interface optionDefinition {
  type: string;
  value?: optionDefinition;
}

export interface sourceOptionsDefinitionType {
  [key: string]: optionDefinition;
}

export interface sourceOptionsType {
  [key: string]: any;
}
