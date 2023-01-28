import { css, styled } from "~/theme";

const shadowStyles = css(({ theme: { rem } }) => ({
  "::before": {
    bottom: 0,
    boxShadow: `0 ${rem(4)} ${rem(35)} 0 rgba(0, 0, 0, 0.25)`,
    content: '""',
    display: "block",
    height: "100%",
    left: 0,
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
    zIndex: 1,
  },
}));

export const StyledWrapper = styled("div")(({ theme: { devices, rem } }) => ({
  display: "flex",
  height: rem(800),
  justifyContent: "space-between",
  columnGap: rem(20),

  [devices["desktop"]]: {
    columnGap: rem(10),
    height: rem(550),
  },

  [devices["mobile"]]: {
    flexDirection: "column",
    rowGap: rem(10),
    height: "auto",
  },
}));

export const StyledLayout = styled("div")(({ theme: { devices, rem } }) => ({
  marginBottom: rem(80),

  [devices["desktop"]]: {
    marginBottom: rem(50),
  },

  [devices["tablet"]]: {
    marginBottom: rem(30),
  },
}));

export const StyledContent = styled("div")(({ theme: { devices, rem } }) => ({
  display: "flex",
  flexBasis: rem(640),
  flexDirection: "column",
  rowGap: rem(20),
  justifyContent: "space-between",
  maxWidth: rem(640),

  [devices["desktop"]]: {
    rowGap: rem(10),
  },

  [devices["mobile"]]: {
    flexDirection: "column",
    rowGap: rem(10),
    maxWidth: "100%",
  },
}));

export const StyledColumn = styled("div")(
  ({ theme: { devices, rem } }) => ({
    alignItems: "stretch",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    flexBasis: rem(310),
    rowGap: rem(40),
    justifyContent: "center",
    maxWidth: rem(310),
    position: "relative",
    textAlign: "center",

    [devices["mobile"]]: {
      paddingBlock: rem(20),
      maxWidth: "100%",
    },
  }),
  shadowStyles
);

export const StyledItem = styled("div")(
  ({ theme: { rem } }) => ({
    flexBasis: rem(325),
    paddingLeft: rem(40),
    position: "relative",
  }),
  shadowStyles
);

export const StyledItemDown = styled("div")<{ isVisible: boolean }>(
  ({ isVisible, theme: { devices, rem } }) => ({
    alignItems: "center",
    display: "flex",
    flexGrow: 1,
    paddingLeft: rem(40),
    position: "relative",
    transform: `translateY(${isVisible ? 0 : rem(30)})`,
    transitionDelay: "1s",
    transition: "transform 0.7s ease-in-out",

    [devices["mobile"]]: {
      transform: "none",
    },
  }),
  shadowStyles
);

export const StyledColumnTitle = styled("h2")(({ theme: { fonts, rem } }) => ({
  color: "black",
  fontFamily: fonts.fontReadex,
  fontSize: rem(15),
  lineHeight: rem(19),
}));

export const StyledItemInfo = styled("div")(
  ({ theme: { devices, fonts, rem } }) => ({
    color: "black",
    fontFamily: fonts.fontReadex,
    paddingRight: rem(40),
    textAlign: "right",

    [devices["tablet"]]: {
      paddingRight: rem(20),
    },
  })
);

export const StyledContentTitle = styled("h2")(({ theme: { rem } }) => ({
  fontSize: rem(15),
  lineHeight: rem(19),
}));

export const StyledContentText = styled("p")(({ theme: { devices, rem } }) => ({
  fontSize: rem(32),
  lineHeight: rem(38),

  [devices["desktop"]]: {
    fontSize: rem(22),
    lineHeight: rem(26),
  },
}));

export const StyledColumnText = styled("p")(
  ({ theme: { devices, fonts, rem } }) => ({
    color: "black",
    fontFamily: fonts.fontReadex,
    fontSize: rem(32),
    lineHeight: rem(38),
    textAlign: "center",

    [devices["desktop"]]: {
      fontSize: rem(22),
      lineHeight: rem(28),
    },
  })
);

export const StyledContentMedia = styled("img")({
  height: "100%",
});

export const StyledColumnImage = styled("div")({
  textAlign: "right",
});

export const StyledItemImage = styled("div")(({ theme: { devices, rem } }) => ({
  height: rem(377),
  textAlign: "center",
  width: "100%",

  [devices["desktop"]]: {
    height: rem(250),
  },
}));

export const StyledItemDownImage = styled("div")({
  height: "100%",
  textAlign: "center",
});

export const StyledColumnInfo = styled("div")(({ theme: { rem } }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  marginInline: "auto",
  maxWidth: rem(250),
}));
