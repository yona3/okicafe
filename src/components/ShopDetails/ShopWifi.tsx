import { Box, Typography } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
export const ShopWifi = ({ shop }: { shop: any }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WifiIcon sx={{ marginRight: 1 }} />
      <Typography>{shop.wifi}</Typography>
    </Box>
  );
};
