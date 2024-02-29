import { Layout } from "@/components/common/Layout";
import { useUser } from "@/hooks/useUser";
import { Box, Button, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

export const MyPage: FC = () => {
  const { user, handleDeleteUser } = useUser();
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
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1">Email: {user?.email}</Typography>
        <Box sx={{ display: "flex", marginTop: 2 }}>
          <Button
            variant="outlined"
            sx={{ marginRight: "12px" }}
            onClick={() => {
              signOut();
            }}
          >
            ログアウト
          </Button>
          {/* TODO: confirmつくる */}
          <Button
            variant="outlined"
            onClick={() => {
              handleDeleteUser();
              signOut();
            }}
          >
            退会
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};
