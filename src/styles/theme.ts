import { createTheme } from "@mui/material/styles";
import { brown, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: brown[700],
    },
    secondary: {
      main: grey[800],
    },
  },
});

export default theme;
