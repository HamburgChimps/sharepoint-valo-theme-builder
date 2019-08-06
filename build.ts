import {
  readFileSync,
  writeFileSync,
  unlinkSync
} from 'fs';

import {
  IThemeJson,
  IOfficeTheme,
} from './theme-json';

export function buildProperty(propertyName: string, fileName: string, themeJson: IThemeJson, themeFilePath: string) {
  const propertyNameParts: string[] = propertyName.split('.');
  const [themeJsonKey, officeThemeKey] = propertyNameParts;

  if (propertyNameParts.length === 1) {
    themeJson[themeJsonKey] = readFileSync(fileName, 'utf8');
  } else {
    (themeJson[themeJsonKey] as IOfficeTheme)[officeThemeKey] = readFileSync(fileName, 'utf8');

  }

  writeFileSync(themeFilePath, JSON.stringify(themeJson, null, 2));
  unlinkSync(fileName);
};

export default function build(filePath: string) {
  const themeDefinitionJsonFilePath = filePath;

  if (!themeDefinitionJsonFilePath) {
    console.log('need to provide a path to the theme file');
    return;
  }

  const themeJson: IThemeJson = JSON.parse(readFileSync(themeDefinitionJsonFilePath, 'utf8'));
  buildProperty('navigationCss', 'navigation.css', themeJson, filePath);
  buildProperty('officeTheme.themeJson', 'office-theme.json', themeJson, filePath);
};