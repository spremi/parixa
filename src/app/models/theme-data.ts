export interface ThemeData {
  /** Name of the theme. */
  name: string;

  /** User friendly label of theme (for selection menu). */
  label: string;

  /** Primary color of the theme (for visualization). */
  primary: string;

  /** Accent color of the theme (for visualization). */
  accent: string;

  /** Warn color of the theme (for visualization). */
  warn: string;

  /** Is it dark theme? */
  isDark: boolean;
}
