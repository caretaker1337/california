import { styled } from "~/theme";

export const StyledWrapper = styled("div")(
  ({ theme: { colors, devices, rem } }) => ({
    maxWidth: rem(935),
    borderRadius: rem(16),
    margin: `0 auto ${rem(75)}`,
    paddingBlock: `${rem(35)} ${rem(40)}`,
    backgroundColor: colors.greenLight,

    [devices["desktop"]]: {
      marginBottom: rem(50),
    },
  })
);

export const StyledMedia = styled("div")(({ theme: { rem } }) => ({
  textAlign: "center",
  marginBottom: rem(15),
}));

export const StyledForm = styled("form")(({ theme: { rem } }) => ({
  textAlign: "center",
  marginBottom: rem(1),
}));

export const StyledInput = styled("input")(({ theme: { devices, placeholder, rem } }) => ({
  height: rem(50),
  width: rem(285),
  backgroundColor: "transparent",
  paddingLeft: rem(30),
  borderRadius: `${rem(55)} 0 0 ${rem(55)}`,
  border: `${rem(1)} solid black`,

  ":focus": {
    ...placeholder({
      color: "transparent",
    }),
  },

  ...placeholder({
    color: "black",
    fontSize: rem(14),
  }),

  [devices["mobile"]]: {
    width: rem(170),
  },
}));

export const StyledButton = styled("button")(({ theme: { rem } }) => ({
  backgroundColor: "black",
  borderRadius: `0 ${rem(55)} ${rem(55)} 0`,
  color: "white",
  fontSize: rem(14),
  height: rem(50),
  lineHeight: rem(17),
  overflow: "hidden",
  verticalAlign: "top",
  width: rem(110),

  ":hover": {
    opacity: 0.5,
  },
}));
