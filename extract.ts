import {
  readFileSync,
  writeFileSync
} from 'fs';

import {
  IThemeJson,
  IOfficeTheme,
  ThemeJsonPropertyValue,
} from './theme-json';

export function extractProperty(propertyName: string, fileName: string, themeJson: IThemeJson) {
  const propertyNameParts: string[] = propertyName.split('.');
  const [themeJsonKey, officeThemeKey] = propertyNameParts;

  if (propertyNameParts.length === 1) {
    writeFileSync(fileName, themeJson[themeJsonKey]);
  } else {
    const officeThemePossible: ThemeJsonPropertyValue = themeJson[themeJsonKey];
    const officeTheme = officeThemePossible as IOfficeTheme;
    writeFileSync(fileName, officeTheme[officeThemeKey]);
  }
};

export default function extract(filePath: string) {
  const themeDefinitionJsonFilePath = filePath;

  if (!themeDefinitionJsonFilePath) {
    console.log('need to provide a path to the theme file');
    return;
  }

  const themeJson: IThemeJson = JSON.parse(readFileSync(themeDefinitionJsonFilePath, 'utf8'));
  extractProperty('navigationCss', 'navigation.css', themeJson);
  extractProperty('officeTheme.themeJson', 'office-theme.json', themeJson);
};