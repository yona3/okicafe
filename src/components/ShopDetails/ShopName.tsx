import { Box, Typography } from "@mui/material";

export const ShopName = ({ shop }: { shop: any }) => {
  return (
    <Box>
      <Typography variant="h1">{shop.name}</Typography>
    </Box>
  );
};
