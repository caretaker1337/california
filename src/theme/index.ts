import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
  ThemeProvider,
  createGlobalStyle,
  css,
  keyframes,
} from "styled-components";

import { colors, devices, fonts } from "./variables";
import { GlobalStyle } from "./global-style";

const theme: DefaultTheme = {
  colors,
  devices,
  fonts,
  placeholder: (css) => ({
    "::-webkit-input-placeholder": {
      ...css,
    },
    "::-moz-placeholder": {
      ...css,
    },
    ":-moz-placeholder": {
      ...css,
    },
    ":-ms-input-placeholder": {
      ...css,
    },
  }),
  rem: (px) => {
    const baseFontSize = fonts.initialFontSize;

    return `${px / baseFontSize}rem`;
  },
};

export {
  GlobalStyle,
  ThemeProvider,
  createGlobalStyle,
  css,
  keyframes,
  styled,
  theme,
};

export type { DefaultTheme, FlattenInterpolation, ThemeProps };
