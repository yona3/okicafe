import { SearchBar } from "@/components/Top/SearchBar";
import { ShopList } from "@/components/Top/ShopList";
import { Box } from "@mui/material";

export const Top = () => {
  return (
    <Box>
      <SearchBar />
      <ShopList />
    </Box>
  );
};
