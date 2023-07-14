import { Container } from "@/src/styles/global";
import { styled } from "@stitches/react";

export const SectionCharacterStyle = styled("section", {
  marginTop: 96,
  height: 631,
  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
  [`${Container}`]: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    borderLeft: "1px solid rgba(255, 255, 255, 0.20)",
    borderRight: "1px solid rgba(255, 255, 255, 0.20)",
  },
  ".image": {
    borderRadius: 5,
    overflow: "hidden",
    height: 631,
  },
  ".info": {
    flex: 1,
    maxWidth: 650,
    marginLeft: 32,
    display: "flex",
    span: {
      display: "block",
      marginTop: 20,
      color: "$grey400",
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "27px",
      opacity: "0.6",
    },
    "& > div": {
      position: "relative",
      flex: 1,
      maxWidth: 546,
      paddingLeft: 27,
      marginLeft: 19,
      "&:before": {
        content: "",
        position: "absolute",
        top: 12,
        left: 0,
        width: 4,
        height: 46,
        backgroundColor: "$red800",
      },
      h1: {
        color: "$white",
        fontSize: 61,
        fontWeight: 600,
        lineHeight: "71px",
        marginBottom: 13,
      },
      p: {
        color: "$grey400",
        fontSize: 16,
        fontWeight: 400,
        lineHeight: "24px",
      },
    },
  },
});
