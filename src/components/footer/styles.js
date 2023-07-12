import { Container } from "@/src/styles/global";
import { styled } from "@stitches/react";

export const FooterStyle = styled("footer", {
  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  padding: "40px 0",
  [`${Container}`]: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    "& > div": {
      display: "flex",
      alignItems: "flex-start",
      strong: {
        color: "$white",
        fontSize: "1.4rem",
        fontWeight: 700,
        lineHeight: "21px",
      },
      p: {
        flex: 1,
        maxWidth: 593,
        fontSize: "1.4rem",
        fontWeight: 400,
        lineHeight: "21px",
        color: "$grey500",
        marginLeft: "18.6rem",
      },
    },
  },
});
