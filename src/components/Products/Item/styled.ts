import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { devices } }) => ({
  flex: "0 1 25%",
  width: "25%",

  [devices["mobile"]]: {
    width: "100%",
  },
}));

export const StyledMedia = styled("div")(({ theme: { devices, rem } }) => ({
  height: rem(215),
  marginBottom: rem(40),

  [devices["tablet"]]: {
    height: rem(180),
    marginBottom: rem(20),
  },
}));

export const StyledLink = styled("a")({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
});

export const StyledImage = styled("img")({
  maxHeight: "100%",
});

export const StyledName = styled("div")(({ theme: { devices, fonts, rem } }) => ({
  fontFamily: fonts.fontReadex,
  fontSize: rem(22),
  lineHeight: rem(28),
  marginBottom: rem(12),
  whiteSpace: "nowrap",

  [devices["tablet"]]: {
    fontSize: rem(18),
    marginBottom: rem(10),
  },
}));

export const StyledDescription = styled("div")(({ theme: { devices, rem } }) => ({
  fontSize: rem(14),
  lineHeight: rem(17),
  marginBottom: rem(25),
  minHeight: rem(75),

  [devices["tablet"]]: {
    fontSize: rem(13),
    minHeight: rem(85),
  },

  [devices["mobile"]]: {
    minHeight: "0",
  },
}));

export const StyledPrice = styled("p")(({ theme: { rem } }) => ({
  fontSize: rem(18),
  lineHeight: rem(22),
  fontWeight: "bold",
}));
