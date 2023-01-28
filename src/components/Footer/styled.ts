import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { devices, colors, rem } }) => ({
  height: rem(380),
  backgroundColor: colors.grayLightest,

  [devices["mobile"]]: {
    height: "auto",
  },
}));

export const StyledLayout = styled("div")(({ theme: { rem } }) => ({
  marginInline: "auto",
  maxWidth: rem(1320),
  paddingInline: rem(10),
}));

export const StyledContent = styled("div")(({ theme: { devices, rem } }) => ({
  display: "flex",
  height: "100%",
  paddingBlock: rem(45),
  position: "relative",

  [devices["tablet"]]: {
    flexDirection: "column",
  },

  [devices["mobile"]]: {
    flexDirection: "column",
    paddingBottom: rem(1),
  },
}));

export const StyledLogo = styled("div")(({ theme: { devices, rem } }) => ({
  maxWidth: rem(370),
  padding: `0 ${rem(40)} 0 ${rem(25)}`,

  [devices["tablet"]]: {
    marginBottom: rem(40),
  },
}));

export const StyledLogoMedia = styled("div")(({ theme: { rem } }) => ({
  marginBottom: rem(20),
}));

export const StyledLogoText = styled("div")(({ theme: { rem } }) => ({
  color: "black",
  fontSize: rem(16),
  lineHeight: rem(19),
}));

export const StyledContentLayout = styled("div")(({ theme: { devices, rem } }) => ({
  display: "flex",
  flex: "0 1 100%",
  justifyContent: "space-around",
  width: "100%",
  paddingRight: rem(75),

  [devices["tablet"]]: {
    flex: "none",
    justifyContent: "flex-start",
    paddingRight: 0,
    paddingLeft: rem(25),
  },

  [devices["mobile"]]: {
    flexDirection: "column",
    rowGap: rem(15),
  },
}));

export const StyledContentColumn = styled("div")(({ theme: { devices, rem } }) => ({
  [devices["tablet"]]: {
    marginRight: rem(40),
  },
}));

export const StyledContentTitle = styled("h2")(({ theme: { fonts, rem } }) => ({
  fontFamily: fonts.fontReadex,
  fontSize: rem(22),
  marginBottom: rem(20),
}));

export const StyledContentMenu = styled("div")({});

export const StyledContentMenuList = styled("ul")({});

export const StyledContentMenuItem = styled("li")(({ theme: { rem } }) => ({
  marginBottom: rem(15),
}));

export const StyledContentMenuLink = styled("a")({
  textDecoration: "none",
  color: "black",
});

export const StyledCopyright = styled("div")(({ theme: { devices, rem } }) => ({
  height: rem(80),

  [devices["mobile"]]: {
    height: "auto",
    paddingBlock: rem(10),
  },
}));

export const StyledCopyrightContent = styled("div")(({ theme: { devices, rem } }) => ({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "space-between",
  paddingInline: rem(30),

  [devices["mobile"]]: {
    flexDirection: "column",
    rowGap: rem(10),
  },
}));

export const StyledCopyrightColumn = styled("div")(({ theme: { fonts, rem } }) => ({
  display: "flex",
  fontFamily: fonts.fontReadex,
  fontSize: rem(18),
  lineHeight: rem(22),

  p: {
    fontFamily: fonts.fontInter,
    marginLeft: rem(5),
  },
}));

export const StyledCopyrightButton = styled("button")(({ theme: { rem } }) => ({
  marginLeft: rem(7),
}));
