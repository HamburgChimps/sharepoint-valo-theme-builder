export interface IThemeJson {
  [key: string]: ThemeJsonPropertyValue;
  id: number;
  lastModified: Date;
  title: string;
  officeTheme: IOfficeTheme;
  navigationCss: string;
  teamworkCss: string | null;
  templatesCss: string | null;
  logoConfiguration: string | null;
  valoThemeScope: string | null;
  valoLogoIcon64Base: string;
  valoLogoIconType: string;
}

export interface IOfficeTheme {
  [key: string]: string;
  name: string;
  themeJson: string;
}

export type ThemeJsonPropertyValue = number | Date | string | null | IOfficeTheme;
