import { styled } from "~/theme";

export const StyledLayout = styled("div")(({ theme: { devices, rem } }) => ({
  display: "flex",
  columnGap: rem(35),
  marginBottom: rem(90),

  [devices["desktop"]]: {
    columnGap: rem(20),
    marginBottom: rem(50),
  },

  [devices["tablet"]]: {
    marginBottom: rem(30),
  },

  [devices["mobile"]]: {
    flexDirection: "column",
  },
}));

export const StyledContent = styled("div")(({ theme: { devices, rem } }) => ({
  fontSize: rem(24),
  lineHeight: rem(30),
  paddingTop: rem(10),

  [devices["desktop"]]: {
    fontSize: rem(18),
    lineHeight: rem(22),
  },

  p: {
    marginBottom: rem(30),

    [devices["desktop"]]: {
      marginBottom: rem(15),
    },
  },
}));

export const StyledMedia = styled("div")({});
