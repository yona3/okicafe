import { Layout } from "@/components/common/Layout";
import { useUser } from "@/hooks/useUser";
import { Button, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

export const MyPage: FC = () => {
  const { user } = useUser();
  const router = useRouter();

  // ユーザーがnullの場合はトップページにリダイレクト
  useEffect(
    () => {
      if (user === null) {
        router.push("/");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user],
  );

  return (
    <Layout>
      <Typography variant="h5">マイページ</Typography>
      <Typography variant="body1">Email: {user?.email}</Typography>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        ログアウト
      </Button>
    </Layout>
  );
};
