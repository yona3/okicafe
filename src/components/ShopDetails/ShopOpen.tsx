import { Box, Typography } from "@mui/material";
import AccessTimeFilledSharpIcon from "@mui/icons-material/AccessTimeFilledSharp";
export const ShopOpen = ({ shop }: { shop: any }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AccessTimeFilledSharpIcon sx={{ marginRight: 1 }} />
      <Typography>{shop.open}</Typography>
    </Box>
  );
};
