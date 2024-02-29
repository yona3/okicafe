import { NextApiHandler } from "next";
import getConfig from "next/config";

type ShopRequestQuery = {
  keyword?: string;
  id?: string;
};

const shops: NextApiHandler = async (req, res) => {
  try {
    const requestData = req.query as ShopRequestQuery; // TODO: 余裕があれば型ガード使う
    const { HOTPEPPER_API_KEY } = getConfig().serverRuntimeConfig;

    const query = (() => {
      const q = new URLSearchParams();
      q.set("key", HOTPEPPER_API_KEY);
      q.set("format", "json");

      if (requestData.id) {
        q.set("id", requestData.id);
        return q;
      }

      if (requestData.keyword) q.set("keyword", requestData.keyword);
      q.set("service_area", "SA98"); // 沖縄
      q.set("genre", "G014"); // カフェ
      q.set("count", "32");
      return q;
    })();

    const response = await fetch(
      `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?${query.toString()}`,
    );
    const data = await response.json();

    return res.json(data.results.shop);
  } catch (error) {
    console.error(error);
    return res.json([]);
  }
};

export default shops;
