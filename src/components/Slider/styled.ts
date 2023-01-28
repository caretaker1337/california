import { Swiper } from "swiper/react";

import { styled } from "~/theme";

export const StyledWrapper = styled(Swiper)(({ theme: { devices, rem } }) => ({
  borderRadius: rem(30),
  height: rem(550),
  marginBottom: rem(45),
  overflow: "hidden",

  [devices["desktop"]]: {
    height: rem(500),
  },

  [devices["tablet"]]: {
    height: rem(400),
    marginBottom: rem(30),
  },

  "& > div.swiper-pagination": {
    bottom: rem(35),
    display: "flex",
    gap: rem(35),
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    width: "100%",
    zIndex: 2,

    "& > span.swiper-pagination-bullet": {
      backgroundColor: "black",
      cursor: "pointer",
      display: "block",
      height: rem(3),
      width: rem(100),

      "&-active": {
        backgroundColor: "tomato",
      },
    },
  },
}));
