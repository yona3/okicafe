import { SearchBar } from "@/components/Top/SearchBar";
import { ShopList } from "@/components/Top/ShopList";
import { Box } from "@mui/material";
import { ShopImage } from "./ShopImage";

export const ShopDetails = ({ shopId }: { shopId: string }) => {
  // shopIdを使った処理
  return (
    <Box>
      <p>{shopId}</p>
      <ShopImage />
    </Box>
  );
};
