import { useUser } from "@/hooks/useUser";
import { Typography, Box, Button } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";

export const UserInfo: FC = () => {
  const { user, handleDeleteUser } = useUser();

  return (
    <>
      {user === null && (
        <>
          <Typography variant="body1">
            ユーザー情報が見つかりませんでした。
          </Typography>
          <Link href="/">トップページ</Link>
        </>
      )}
      {user && (
        <>
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
        </>
      )}
    </>
  );
};
