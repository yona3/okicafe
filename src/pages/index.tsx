import { Top } from "@/components/Top";
import { Layout } from "@/components/common/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Okicafe</title>
        <meta name="description" content="沖縄のカフェ検索アプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
    </Layout>
  );
}
