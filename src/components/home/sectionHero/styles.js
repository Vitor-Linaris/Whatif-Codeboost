import { styled } from "@stitches/react";
import bgHero from "../../../assets/bg-hero.jpg";
import { Container } from "@/src/styles/global";

export const SectionHeroStyle = styled("section", {
  position: "relative",
  zIndex: 1,
  width: "100%",
  height: 731,
  background: `url(${bgHero.src}) no-repeat top center`,
  backgroundAttachment: "fixed",
  paddingTop: 96,
  display: "flex",
  [`${Container}`]: {
    display: "flex",
    alignItems: "flex-start",
  },
  "&:after": {
    content: "",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 300,
    backgroundImage: "linear-gradient(transparent, #000000)",
    zIndex: -1,
  },
});

export const AreaSocial = styled("div", {
  width: 72,
  height: "100%",
  borderLeft: "1px solid rgba(255, 255, 255, 0.20)",
  borderRight: "1px solid rgba(255, 255, 255, 0.20)",
  ul: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    listStyle: "none",
    padding: "30px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
    li: {
      "&:not(:last-child)": {
        marginBottom: 32,
      },
      a: {
        display: "block",
      },
    },
  },
});

export const ContextText = styled("div", {
  height: "100%",
  paddingLeft: 96,
  paddingRight: 71,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  flex: 1,
  paddingBottom: 31,
  borderRight: "1px solid rgba(255, 255, 255, 0.20)",
  ".left": {
    flex: 1,
    maxWidth: 574,
    paddingBottom: "10.1rem",
    h3: {
      color: "#FFA800",
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "21px",
      letterSpacing: "1.33px",
      marginBottom: "8px",
    },
    h1: {
      fontWeight: 600,
      fontSize: "6.1rem",
      lineHeight: "7.1rem",
      marginBottom: 24,
      maxWidth: 400,
    },
    p: {
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: "24px",
      color: "$grey100",
      maxWidth: 490,
      marginBottom: 32,
    },
    a: {
      display: "inline-blobk",
      padding: "15px 52px",
      backgroundColor: "$red900",
      borderRadius: 5,
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      color: "$white",
      textDecoration: "none",
      transition: "filter 0.3s ease",
      "&:hover": {
        filter: "brightness(0.8)",
      },
    },
  },
});
