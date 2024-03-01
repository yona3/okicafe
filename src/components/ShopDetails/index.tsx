import { Box, CircularProgress, Container, Divider } from "@mui/material";
import { ShopImage } from "./ShopImage";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useShops } from "@/hooks/useShop";
import { ShopName } from "./ShopName";
import { ShopAddress } from "./ShopAdrees";
import { ShopOpen } from "./ShopOpen";
import { ShopWifi } from "./ShopWifi";
import { ShopAveragePrice } from "./ShopAveragePrice";
import { blue, grey } from "@mui/material/colors";
import ShopReview from "./ShopReview";
import ShopEvaluation from "./ShopEvaluation";
import { ShopLink } from "./ShopLink";
import ShopAddReview from "./ShopAddReview";

export const ShopDetails = () => {
  const router = useRouter();
  const [query] = useState({ id: router.query.shopId as string }); // stateにしないと無限fetchする
  const { shops, isLoading } = useShops([], query);

  const shop = useMemo(() => {
    if (isLoading) return null;
    return shops?.find((s) => s.id === router.query.shopId);
  }, [isLoading, router.query.shopId, shops]);

  return (
    <Container maxWidth="md" sx={{ margin: "0 auto", color: "#424242" }}>
      {shop && (
        <Box sx={{ marginTop: 5 }}>
          <ShopImage shop={shop} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              marginTop: 5,
            }}
          >
            <Box sx={{ marginBottom: 1 }}>
              <ShopName shop={shop} />
            </Box>
            <ShopEvaluation />
            <Box sx={{ marginBottom: 5 }} />

            <ShopAddress shop={shop} />
            <Box sx={{ marginBottom: 2 }} />

            <ShopOpen shop={shop} />
            <Box sx={{ marginBottom: 2 }} />

            <ShopAveragePrice shop={shop} />
            <Box sx={{ marginBottom: 2 }} />

            <ShopWifi shop={shop} />
            <Box sx={{ marginBottom: 2 }} />

            <ShopLink shop={shop} />
            <Box sx={{ marginBottom: 2 }} />

            <Box
              sx={{
                width: "100%",
                borderTop: "2px solid",
                borderColor: "grey.300",
                my: 4,
              }}
            />
            <ShopReview />

            {/* open modal button */}
            <ShopAddReview />
          </Box>
        </Box>
      )}
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress size={30} sx={{ color: blue[500] }} />
        </Box>
      )}
      {!shop && !isLoading && <>お店が見つかりませんでした</>}
    </Container>
  );
};
