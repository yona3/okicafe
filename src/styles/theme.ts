import { createTheme } from "@mui/material/styles";
import { orange, purple, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[300],
    },
    secondary: purple,
  },
});

export default theme;
