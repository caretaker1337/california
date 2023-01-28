import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { colors, devices } }) => ({
  backgroundColor: colors.greenLight,
  display: "flex",
  height: "100%",

  [devices["mobile"]]: {
    flexDirection: "column",
  },
}));

export const StyledContent = styled("div")(({ theme: { devices, rem } }) => ({
  alignItems: "flex-start",
  display: "flex",
  flex: "0 1 50%",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: rem(55),
  width: "50%",

  [devices["mobile"]]: {
    alignItems: "center",
    paddingLeft: rem(45),
    paddingRight: rem(45),
    textAlign: "center",
    width: "100%",
  },
}));

export const StyledTitle = styled("h2")(({ theme: { devices, fonts, rem } }) => ({
  fontFamily: fonts.fontReadex,
  fontSize: rem(58),
  lineHeight: rem(70),
  marginBottom: rem(30),

  [devices["desktop"]]: {
    fontSize: rem(46),
    lineHeight: rem(50),
  },

  [devices["tablet"]]: {
    fontSize: rem(32),
    lineHeight: rem(35),
    marginBottom: rem(20),
  },

  [devices["mobile"]]: {
    fontSize: rem(22),
    lineHeight: rem(24),
    marginBottom: rem(10),
  },
}));

export const StyledText = styled("p")(({ theme: { devices, rem } }) => ({
  lineHeight: rem(19),
  marginBottom: rem(30),

  [devices["mobile"]]: {
    fontSize: rem(13),
    marginBottom: rem(10),
  },
}));

export const StyledMedia = styled("div")(({ theme: { devices } }) => ({
  alignItems: "flex-end",
  display: "flex",
  flex: "0 1 50%",

  [devices["mobile"]]: {
    height: "50%",
    justifyContent: "center",
  },
}));

export const StyledImage = styled("img")(() => ({
  maxHeight: "100%",
}));
