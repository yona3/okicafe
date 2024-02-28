import { useShops } from "@/hooks/useShop";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { GetServerSideProps } from "next";
import getConfig from "next/config";
import { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";

// TODO: shopの型つけたい
// TODO: queryのglobal状態管理
export const ShopList = ({ initialData }: { initialData?: any }) => {
  const [query, setQuery] = useState({});
  const { shops } = useShops(initialData, query);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {shops.map((shop: any) => (
          <Grid item xs={3} key={shop.id}>
            <Card sx={{ minHeight: 390 }}>
              <CardMedia
                sx={{ height: 180 }}
                image={shop.photo.pc.l}
                title="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontSize: 18 }}
                  component="div"
                >
                  {shop.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: 14,
                  }}
                >
                  <PlaceIcon
                    sx={{
                      fontSize: 14,
                      verticalAlign: "middle",
                      mr: "2px",
                    }}
                  />
                  {shop.address}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    marginTop: "4px",
                    fontSize: 14,
                  }}
                >
                  {shop.catch}
                </Typography>
                <Typography sx={{ marginTop: "4px" }}>
                  <Link
                    href={shop.urls.pc}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      fontSize: 14,
                      color: blue[300],
                      textDecorationColor: blue[300],
                    }}
                  >
                    詳細
                  </Link>
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
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
