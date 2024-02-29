import { Box, Typography } from "@mui/material";
import Image from "next/image";

const data: {
  id: string;
  name: string;
  logo_image: string;
} = {
  id: "J003716022",
  name: "ザ ジャングリラ カフェ アンド レストラン",
  logo_image: "https://imgfp.hotp.jp/IMGH/58/71/P041905871/P041905871_238.jpg",
};

export const ShopImage = () => {
  return (
    <Box>
      <Typography variant="h2">{data.id}</Typography>
      <Typography variant="body1">{data.name}</Typography>
    </Box>
  );
};
