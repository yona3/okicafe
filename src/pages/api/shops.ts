import { NextApiHandler } from "next";
import getConfig from "next/config";

type ShopRequestQuery = {
  keyword?: string;
};

const shops: NextApiHandler = async (req, res) => {
  const requestData = req.query as ShopRequestQuery; // TODO: 余裕があれば型ガード使う
  const { HOTPEPPER_API_KEY } = getConfig().serverRuntimeConfig;

  const query = new URLSearchParams();
  query.set("key", HOTPEPPER_API_KEY);
  query.set("format", "json");
  query.set("service_area", "SA98"); // 沖縄
  query.set("genre", "G014"); // カフェ
  query.set("count", "32");
  if (requestData.keyword) query.set("keyword", requestData.keyword);

  const response = await fetch(
    `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?${query.toString()}`,
  );
  const data = await response.json();

  return res.json(data.results.shop);
};

export default shops;
