import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";

export default function ShopEvaluation() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={4}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        readOnly
        size="medium"
      />
      <Box sx={{ ml: 1, fontSize: 16, color: yellow[800], fontWeight: "bold" }}>
        4.0
      </Box>
    </Box>
  );
}
