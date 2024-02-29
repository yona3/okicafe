import { Box, Typography } from "@mui/material";
import PriceChangeSharpIcon from "@mui/icons-material/PriceChangeSharp";

export const ShopAveragePrice = ({ shop }: { shop: any }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <PriceChangeSharpIcon sx={{ marginRight: 1 }} />
      <Typography>{shop.budget.name}</Typography>
    </Box>
  );
};
