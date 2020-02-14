export interface ThemeType {
  header: string;
  footer: string;
  firstLeft: string;
  secondLeft: string;
  center: string;
  right: string;
}

export const THEMES: { [id: string]: ThemeType } = {
  themeA: {
    header: '#4f5a27',
    footer: '#ccc86f',
    firstLeft: '#68933b',
    secondLeft: '#948b76',
    center: '#fce0a7',
    right: '#f5d36a'
  },
  themeB: {
    header: 'red',
    footer: 'red',
    firstLeft: 'red',
    secondLeft: 'red',
    center: 'red',
    right: 'red'
  }
};

export const DEFAULT_THEME: ThemeType = THEMES['themeA'];
