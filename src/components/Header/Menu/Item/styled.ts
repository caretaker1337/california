import { styled } from "~/theme";

export const StyledLink = styled("a")(({ theme: { devices, rem } }) => ({
  color: "black",
  textDecoration: "none",
  textTransform: "uppercase",

  [devices["tablet"]]: {
    fontSize: rem(13),
  },

  [devices["mobile"]]: {
    fontSize: rem(22),
  },

  ":hover": {
    opacity: 0.7,
  },
}));
