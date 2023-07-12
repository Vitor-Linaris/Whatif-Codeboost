import { styled } from "@stitches/react";

export const StyleSectionCharacters = styled("div", {
  paddingTop: 56,
  paddingBottom: 72,
  ".title": {
    display: "flex",
    alignItems: "center",
    marginBottom: 56,
    span: {
      color: "$white",
      fontSize: "1.8rem",
      fontWeight: "400",
      lineHeight: "2.7rem",
      opacity: "0.4",
      marginRight: "11.3rem",
    },
    h2: {
      position: "relative",
      color: "$white",
      fontSize: "2.5rem",
      fontWeight: "600",
      lineHeight: "3.5rem",
      maxWidth: "21.6rem",
      paddingLeft: "16px",
      "&:before": {
        content: "",
        position: "absolute",
        top: 5.5,
        left: 0,
        width: "2px",
        height: "59px",
        backgroundColor: "$red800",
      },
    },
  },
});

export const StyleListCharacters = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "40px 33px",
  ".marvel": {
    width: "28rem",
    height: "36.8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
