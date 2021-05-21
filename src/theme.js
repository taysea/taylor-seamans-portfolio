import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

export const customTheme = deepMerge(grommet, {
  name: "my theme",
  global: {
    colors: {
      text: {
        light: "#737373",
      },
    },
    font: {
      family: '"Open Sans", sans-serif',
    },
  },
})
