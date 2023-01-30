import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { rem, devices } }) => ({
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


