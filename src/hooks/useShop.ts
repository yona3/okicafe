import getConfig from "next/config";
import { useEffect, useMemo, useState } from "react";

type Shop = Record<string, any>[];
type ShopRequestQuery = {
  keyword?: string;
};

// お店の取得

export const useShop = (initialData: Shop, _query: ShopRequestQuery) => {
  const [shop, setShop] = useState(initialData ?? []);
  const query = useMemo(() => _query, [_query]); // メモ化しないと無限fetchする

  const fetchShops = async () => {
    console.log("[GET]: fetchShops");

    try {
      const { API_HOST } = getConfig().publicRuntimeConfig;

      const requestQuery = new URLSearchParams();
      if (query.keyword) requestQuery.set("keyword", query.keyword);

      const host = process.browser ? "" : API_HOST;
      const res = await fetch(`${host}/api/shops?${requestQuery.toString()}`);
      const data = await res.json();
      console.log("success fetchShops", data);

      return data;
    } catch (error) {
      console.error("error fetchShops", error);
      return [];
    }
  };

  const handleFetchShops = async () => {
    const data = await fetchShops();
    setShop(data);
  };

  useEffect(() => {
    handleFetchShops();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { shop };
};
