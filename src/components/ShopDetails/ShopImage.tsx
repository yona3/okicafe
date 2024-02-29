/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";

export const ShopImage = ({ shop }: { shop: any }) => {
  return (
    <Box>
      <img
        src={shop.photo.pc.l}
        alt="Logo"
        style={{
          width: "600px",
          borderRadius: "8px",
        }}
      />
    </Box>
  );
};

{
  /* <Typography variant="h2">{JSON.stringify(shop)}</Typography>
      <Typography variant="h2">{shop.name}</Typography>
      <Typography variant="h2">{shop.address}</Typography>
      <Typography variant="h2">{shop.budget.name}</Typography> */
}
