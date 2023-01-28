import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { colors, rem } }) => ({
  backgroundColor: colors.grayLightest,
  borderRadius: rem(15),
  flex: "0 1 33.3333%",
  maxWidth: "33.3333",
  paddingTop: rem(35),
  textAlign: "center",
}));

export const StyledTitle = styled("h2")(({ theme: { devices, fonts, rem } }) => ({
  fontFamily: fonts.fontReadex,
  fontSize: rem(28),
  lineHeight: rem(35),
  marginBottom: rem(30),

  [devices["tablet"]]: {
    fontSize: rem(24),
  },
}));

export const StyledSubtitle = styled("p")(({ theme: { fonts, rem } }) => ({
  fontFamily: fonts.fontReadex,
  fontSize: rem(13),
  lineHeight: rem(17),
}));

export const StyledHelper = styled("div")(({ theme: { rem } }) => ({
  marginBottom: rem(30),
}));

export const StyledMedia = styled("div")(({ theme: { rem } }) => ({
  alignItems: "center",
  display: "flex",
  height: rem(250),
  justifyContent: "center",
  textAlign: "center",
}));
