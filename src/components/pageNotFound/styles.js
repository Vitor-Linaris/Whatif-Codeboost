import { Container } from "@/src/styles/global";
import { styled } from "@stitches/react";

export const StylePageNotFound = styled("section", {
  [`${Container}`]: {
    marginTop: 96,
    paddingTop: 95,
    paddingBottom: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderLeft: "1px solid rgba(255, 255, 255, 0.20)",
    borderRight: "1px solid rgba(255, 255, 255, 0.20)",
  },
  h1: {
    fontSize: "4.9rem",
    fontWeight: 600,
    lineHeight: "5.9rem",
    marginBottom: 24,
  },
  p: {
    fontSize: "1.6rem",
    fontWeight: 400,
    lineHeight: "2.4rem",
    maxWidth: 641,
    marginBottom: 40,
  },
  a: {
    display: "inline-block",
    lineHeight: "54px",
    backgroundColor: "$red900",
    borderRadius: 5,
    padding: "0 73px",
    fontSize: "1.6rem",
    fontWeight: 600,
    color: "$white",
    transition: "filter .3s ease",
    marginBottom: 72,
    "&:hover": {
      filter: "brightness(0.8)",
    },
  },
});
