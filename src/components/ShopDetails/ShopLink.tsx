import { Box, Button, Link, Typography } from "@mui/material";

export const ShopLink = ({ shop }: { shop: any }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button variant="contained" href={shop.urls.pc} target="_blank">
        詳細はこちら
      </Button>
    </Box>
  );
};
