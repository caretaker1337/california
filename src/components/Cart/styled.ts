import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { rem, devices } }) => ({
  minHeight: rem(465),
  padding: rem(15),
  border: `${rem(2)} solid black`,
  marginBottom: rem(30),


  [devices["mobile"]]: {
    width: "100%", 
  },
}));

export const StyledList = styled("ul")(({ theme: { rem } }) => ({
  display: "flex",
  gap: rem(30),

}));

export const StyledText = styled("ul")(({ theme: { rem } }) => ({
  fontSize: rem(25),
  fontWeight: "bold",
  textAlign: "center",
  paddingTop: rem(200),
}));


