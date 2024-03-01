import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

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
        size="large"
      />
      {4 !== null && (
        <Box sx={{ ml: 2, fontWeight: "bold", fontSize: 30 }}>{4}</Box>
      )}
    </Box>
  );
}
