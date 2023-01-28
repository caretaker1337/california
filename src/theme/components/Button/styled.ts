import { styled } from "~/theme";

export const StyledButton = styled("button")(({ theme: { devices, rem } }) => ({
  border: `${rem(1)} solid black`,
  borderRadius: rem(200),
  fontSize: rem(18),
  height: rem(50),
  minWidth: rem(170),
  paddingInline: rem(5),
  transitionDuration: "0.2s",
  transitionProperty: "background-color, color",
  transitionTimingFunction: "ease-in",
  willChange: "contents",
  color: "black",

  [devices["tablet"]]: {
    fontSize: rem(16),
    height: rem(40),
    maxWidth: rem(130),
  },

  ":hover": {
    backgroundColor: "black",
    color: "white",
  },
}));
