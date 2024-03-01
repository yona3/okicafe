/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";

export const ShopImage = ({ shop }: { shop: any }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={shop.photo.pc.l}
        alt="Logo"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
    </Box>
  );
};
