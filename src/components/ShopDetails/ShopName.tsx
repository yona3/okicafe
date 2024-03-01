import { Box, Typography } from "@mui/material";

export const ShopName = ({ shop }: { shop: any }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" sx={{ fontSize: 32, fontWeight: "bold" }}>
        {shop.name}
      </Typography>
    </Box>
  );
};
