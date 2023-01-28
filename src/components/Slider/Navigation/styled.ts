import { styled } from "~/theme";

export const StyledArrow = styled("button")(({ theme: { rem } }) => ({
  cursor: "pointer",
  height: rem(24),
  left: rem(20),
  position: "absolute",
  top: "50%",
  width: rem(12),
  zIndex: 2,

  ":last-of-type": {
    right: rem(20),
    left: "initial",
    transform: "rotate(180deg)",
  },
}));
