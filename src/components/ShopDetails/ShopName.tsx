import { Box, Typography } from "@mui/material";

export const ShopName = ({ shop }: { shop: any }) => {
  return (
    <Box>
      <Typography variant="h3">{shop.name}</Typography>
    </Box>
  );
};
