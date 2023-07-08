import { styled, globalCss } from "./index";

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    fontFamily: "Poppins, sans-serif",
  },
  html: {
    fontSize: "62.5%",
  },
  body: {
    "-webkit-font-smoothing": "antialiased",
    background: "linear-gradient(135deg, #010101 0%, #000 100%)",
    color: "$white",
  },
  img: {
    maxWidth: "100%",
    display: "block",
  },
  button: {
    cursor: "pointer",
  },
});