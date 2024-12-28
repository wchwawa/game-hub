import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const colors = {
  gray: {
    50: '#e1edec',
    100: '#e2e3dd',
    200: '#d9e2e3',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#221f1e', // card
    800: '#140d06',
    900: '#0d0d0d',
  },
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      // sets a custom bg color for dark mode only
      bg: mode(
        // light mode value retrieved from theme
        '#d0d0d0',
        // your custom value for dark mode
        '#161615',
      )(props),
    },
  }),
};


const theme = extendTheme({
  config,
  colors,
  styles,
});

export default theme;

