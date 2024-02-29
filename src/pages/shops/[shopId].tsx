import { ShopDetails } from "@/components/ShopDetails";
import { Layout } from "@/components/common/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Okicafe</title>
        <meta name="description" content="沖縄のカフェ検索アプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShopDetails shopId={router.query.shopId as string} />

      <p>Post: {router.query.shopId}</p>
    </Layout>
  );
}
