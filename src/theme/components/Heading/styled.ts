import { styled } from "~/theme";

export const StyledTitle = styled("h2")<{ withText?: boolean }>(
  ({ withText, theme: { devices, fonts, rem } }) => ({
    color: "black",
    fontFamily: fonts.fontReadex,
    fontSize: rem(42),
    lineHeight: rem(53),
    marginBottom: withText ? rem(10) : rem(25),
    textAlign: "center",

    [devices["tablet"]]: {
      fontSize: rem(36),
    },
  })
);

export const StyledText = styled("p")(({ theme: { devices, fonts, rem } }) => ({
  color: "black",
  fontFamily: fonts.fontReadex,
  fontSize: rem(14),
  lineHeight: rem(17),
  margin: `0 auto ${rem(30)}`,
  maxWidth: rem(630),
  textAlign: "center",

  [devices["desktop"]]: {
    marginBottom: rem(25),
  },
}));
