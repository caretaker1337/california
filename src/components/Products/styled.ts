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

export const StyledList = styled("ul")(({ theme: { devices, rem } }) => ({
  display: "flex",
  gap: rem(30),
  flexWrap: "wrap",
  justifyContent: "space-between",

  [devices["mobile"]]: {
    flexDirection: "column",
  },
}));
