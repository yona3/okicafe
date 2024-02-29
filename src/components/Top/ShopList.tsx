import { useShops } from "@/hooks/useShop";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import getConfig from "next/config";
import { useEffect, useState } from "react";
import { useKeywordStore } from "@/states";
import { ShopCard } from "@/components/Top/ShopCard";
import { blue } from "@mui/material/colors";

// TODO: shopの型つけたい
// TODO: any消す
export const ShopList = ({ initialData }: { initialData?: any }) => {
  const keyword = useKeywordStore((state) => state.keyword);
  const [query, setQuery] = useState({}); // stateにしないと無限fetchする
  const { shops, isLoading } = useShops(initialData, query);

  useEffect(() => {
    setQuery({ keyword });
  }, [keyword]);

  return (
    <Box>
      {isLoading ? (
        // loading
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress size={30} sx={{ color: blue[500] }} />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {shops?.map((shop: any) => (
            <Grid item xs={3} key={shop.id}>
              <ShopCard shop={shop} />
            </Grid>
          ))}
        </Grid>
      )}
      {/* empty */}
      {shops?.length === 0 && !isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body1" color="text.secondary">
            お店が見つかりませんでした。
          </Typography>
        </Box>
      )}
    </Box>
  );
};

const fetchFirstViewShops = async () => {
  console.log("[GET]: fetchFirstViewShops");

  try {
    const { API_HOST } = getConfig().publicRuntimeConfig;

    const host = process.browser ? "" : API_HOST;
    const res = await fetch(`${host}/api/shops`);
    const data = await res.json();
    console.log("success fetchFirstViewShops", data);

    return data;
  } catch (error) {
    console.error("error fetchFirstViewShops", error);
    return [];
  }
};

// getserverSideProps
export const getServerSideProps: GetServerSideProps = async () => {
  const initialData = await fetchFirstViewShops();

  return {
    props: { initialData },
  };
};
