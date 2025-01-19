import { styled } from "@macaron-css/solid";

export const Button = styled("button", {
  base: {
    backgroundColor: "gainsboro",
    borderRadius: "9999px",
    fontSize: "13px",
    padding: "10px 15px",
    ":hover": {
      backgroundColor: "lightgray",
    },
  },
});
