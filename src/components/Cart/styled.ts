import { styled } from "~/theme";

export const StyledLayout = styled("div")(({ theme: { rem } }) => ({
  fontSize: rem(25),
}));

export const StyledWrapper = styled("div")(({ theme: { rem, devices } }) => ({
  minHeight: rem(465),
  padding: rem(15),
  border: `${rem(2)} solid black`,
  marginBottom: rem(30),

  [devices["mobile"]]: {
    width: "100%",
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

export const StyledText = styled("ul")(({ theme: { rem } }) => ({
  fontSize: rem(25),
  fontWeight: "bold",
  textAlign: "center",
  paddingTop: rem(200),
}));

export const StyledPrice = styled("div")(({ theme: { rem } }) => ({
  width: rem(170),
  minHeight: rem(30),
  border: `${rem(2)} solid black`,
  fontWeight: "bold",
  textAlign: "left",
  paddingTop: rem(5),
  paddingLeft: rem(5),
  marginBottom: rem(30),
  fontSize: rem(15),
}));


