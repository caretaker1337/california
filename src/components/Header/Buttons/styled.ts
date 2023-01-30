import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { rem } }) => ({
  display: "flex",
  gap: rem(20),
}));

export const StyledButton = styled("button")(({ theme: { rem } }) => ({
  color: "black",
  width: rem(24),

  ":hover": {
    opacity: 0.7,
  },
}));

export const StyledLink = styled("a")({
  
});

export const StyledBurgerLine = styled("span")(({ theme: { rem } }) => ({
  backgroundColor: "black",
  borderRadius: rem(10),
  display: "block",
  height: rem(3),
  position: "relative",
  transformOrigin: rem(1),
  transition: "all 0.3s linear",
  width: "100%",
}));

export const StyledBurger = styled.button<{ isOpened: boolean }>(
  ({ isOpened, theme: { devices, rem } }) => ({
    alignItems: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "none",
    flexDirection: "column",
    height: rem(32),
    justifyContent: "space-around",
    overflow: "hidden",
    padding: 0,
    width: rem(32),
    zIndex: 10,

    [devices["mobile"]]: {
      display: "flex",
    },

    [`> ${StyledBurgerLine}`]: {
      ":first-child": {
        left: isOpened ? rem(3) : 0,
        transform: isOpened ? "rotate(45deg)" : "rotate(0)",
      },

      ":nth-child(2)": {
        opacity: isOpened ? "0" : "1",
        transform: isOpened ? `translateX(${rem(20)})` : "translateX(0)",
      },

      ":nth-child(3)": {
        left: isOpened ? rem(3) : 0,
        transform: isOpened ? "rotate(-45deg)" : "rotate(0)",
      },
    },
  })
);
