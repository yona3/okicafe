import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { FC } from "react";
import Link from "next/link";

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
    <Link href={`/shops/${shop.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <CardActionArea>
          <CardMedia
            sx={{ height: 180 }}
            image={shop.photo.pc.l}
            title="green iguana"
          />
          <CardContent sx={{ height: 164 }}>
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
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
