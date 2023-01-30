import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { rem } }) => ({
  marginInline: "auto",
  maxWidth: rem(1320),
  paddingInline: rem(10),
}));

export const StyledLayout = styled("div")(({ theme: { devices, rem } }) => ({
  alignItems: "center",
  display: "flex",
  height: rem(80),
  justifyContent: "space-between",
  marginBottom: rem(30),

  [devices["desktop"]]: {
    marginBottom: 0,
  },
}));
