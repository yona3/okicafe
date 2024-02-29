import { Box, Typography } from "@mui/material";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";

export const ShopAddress = ({ shop }: { shop: any }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <HomeSharpIcon sx={{ marginRight: 1 }} />
      <Typography>{shop.address}</Typography>
    </Box>
  );
};
