import {
  DarkTheme,
  LightTheme
} from ".";

export enum ThemeIndex {
  LIGHT_THEME = 'Light',
  DARK_THEME = 'Dark',
}

export type ThemeStyles = {
  primaryBg: string;
}

export const ThemeMapping: Record<ThemeIndex, ThemeStyles> = {
  [ThemeIndex.LIGHT_THEME]: LightTheme,
  [ThemeIndex.DARK_THEME]: DarkTheme,
}