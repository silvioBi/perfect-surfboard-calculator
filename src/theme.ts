import { extendTheme, theme } from "@chakra-ui/react";

export const myTheme = extendTheme({
  components: {
    NumberInput: {
      parts: ["field", "stepper"],
      sizes: {
        noBorder: {
          stepper: {
            ...theme.components.NumberInput.sizes.md.stepper,
            _first: {
              borderTopEndRadius: "none",
            },
            _last: {
              borderBottomEndRadius: "none",
            },
          },
          field: {
            ...theme.components.NumberInput.sizes.md.field,
            borderRadius: "none",
          },
        },
      },
    },
  },
});
