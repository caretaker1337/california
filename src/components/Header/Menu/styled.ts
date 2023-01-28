import { styled } from "~/theme";

export const StyledWrapper = styled("div")<{ isOpened: boolean }>(
  ({ isOpened, theme: { devices } }) => ({
    [devices["mobile"]]: {
      backgroundColor: "white",
      bottom: 0,
      height: "100%",
      left: 0,
      opacity: isOpened ? 1 : 0,
      position: "absolute",
      right: 0,
      top: 0,
      visibility: isOpened ? "visible" : "hidden",
      width: "100%",
      zIndex: 5,
      transition: "visibility 0.2s linear, opacity 0.2s linear",
    },
  })
);

export const StyledList = styled("ul")(({ theme: { devices, rem } }) => ({
  display: "flex",
  gap: rem(40),

  [devices["tablet"]]: {
    gap: rem(25),
  },

  [devices["mobile"]]: {
    alignItems: "center",
    flexDirection: "column",
    gap: rem(40),
    height: "100%",
    justifyContent: "center",
  },
}));
