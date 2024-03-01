import { Box, Typography } from "@mui/material";
import PriceChangeSharpIcon from "@mui/icons-material/PriceChangeSharp";

export const ShopAveragePrice = ({ shop }: { shop: any }) => {
  const averagePrice = shop.budget.average;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PriceChangeSharpIcon sx={{ marginRight: 1 }} />
      <Typography>
        平均：{averagePrice === "" ? "不明" : averagePrice}
      </Typography>
    </Box>
  );
};
