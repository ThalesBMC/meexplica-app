import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import { fonts } from "./fonts";

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("gray.50", "#121212")(props),
      },
    }),
  },
});

export default customTheme;
