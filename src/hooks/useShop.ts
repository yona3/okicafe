import getConfig from "next/config";
import { useEffect, useMemo, useState } from "react";

type Shops = Record<string, any>[] | undefined;
type ShopsRequestQuery = {
  keyword?: string;
};

// お店の取得

export const useShops = (
  initialData = undefined,
  _query: ShopsRequestQuery,
) => {
  const query = useMemo(() => _query, [_query]); // メモ化しないと無限fetchする
  const [shops, setShops] = useState<Shops>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const fetchShops = async () => {
    console.log("[GET]: fetchShops");
    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
    }
  };

  const handleFetchShops = async () => {
    const data = await fetchShops();
    setShops(data);
  };

  useEffect(() => {
    handleFetchShops();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { shops, isLoading };
};
