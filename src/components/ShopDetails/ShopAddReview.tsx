import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

export default function ShopAddReview() {
  return (
    <Stack spacing={2} direction="row" justifyContent="flex-end">
      <IconButton aria-label="add" color="primary">
        <AddCircleOutlinedIcon fontSize="large" />
      </IconButton>
    </Stack>
  );
}
