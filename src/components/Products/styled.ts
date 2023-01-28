import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { devices, rem } }) => ({
  marginBottom: rem(75),
  minHeight: rem(485),
  position: "relative",

  [devices["desktop"]]: {
    marginBottom: rem(50),
  },

  [devices["tablet"]]: {
    marginBottom: rem(30),
  },
}));

export const StyledList = styled("div")(({ theme: { devices, rem } }) => ({
  display: "flex",
  gap: rem(30),

  [devices["mobile"]]: {
    flexDirection: "column",
  },
}));
