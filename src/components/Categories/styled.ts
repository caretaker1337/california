import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { devices, rem } }) => ({
  marginBottom: rem(75),
  minHeight: rem(550),
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
  justifyContent: "space-between",
  columnGap: rem(28),

  [devices["desktop"]]: {
    columnGap: rem(14),
  },

  [devices["mobile"]]: {
    flexDirection: "column",
    rowGap: rem(10),
  },
}));
