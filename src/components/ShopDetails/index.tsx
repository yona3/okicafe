import { Box, StepIconClassKey, Typography } from "@mui/material";
import { ShopImage } from "./ShopImage";
import { useRouter } from "next/router";
import { useState } from "react";
import { useShops } from "@/hooks/useShop";
import { ShopName } from "./ShopName";
import { ShopAddress } from "./ShopAdrees";
import { ShopOpen } from "./ShopOpen";
import { ShopWifi } from "./ShopWifi";
import { ShopAveragePrice } from "./ShopAveragePrice";

export const ShopDetails = () => {
  const router = useRouter();
  const [query] = useState({ id: router.query.shopId as string }); // stateにしないと無限fetchする
  const { shops, isLoading } = useShops([], query);
  const shop = shops?.[0];
  return (
    <Box sx={{ width: "100%" }}>
      {shop && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ShopImage shop={shop} />
          <Box sx={{ marginBottom: 5 }} />

          <ShopName shop={shop} />
          <Box sx={{ marginBottom: 5 }} />

          <ShopAddress shop={shop} />
          <Box sx={{ marginBottom: 2 }} />

          <ShopOpen shop={shop} />
          <Box sx={{ marginBottom: 2 }} />

          <ShopWifi shop={shop} />
          <Box sx={{ marginBottom: 2 }} />

          <ShopAveragePrice shop={shop} />
          <></>
        </Box>
      )}

      {!shop && <>お店が見つかりませんでした</>}
    </Box>
  );
};
