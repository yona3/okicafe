import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import PlaceIcon from "@mui/icons-material/Place";
import { FC } from "react";

type ShopCardProps = {
  shop: {
    id: string;
    name: string;
    address: string;
    catch: string;
    photo: {
      pc: {
        l: string;
      };
    };
    urls: {
      pc: string;
    };
  };
};

export const ShopCard: FC<ShopCardProps> = ({ shop }) => {
  return (
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
    </Card>
  );
};
