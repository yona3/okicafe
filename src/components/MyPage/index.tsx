import { Layout } from "@/components/common/Layout";
import { useUser } from "@/hooks/useUser";
import { Button, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { FC } from "react";

export const MyPage: FC = () => {
  const { user } = useUser();
  const router = useRouter();

  if (user === null) {
    router.push("/");
  }

  return (
    <Layout>
      <Typography variant="h5">マイページ</Typography>
      {/* email */}
      <Typography variant="body1">Email: {user?.email}</Typography>
      <Button onClick={() => signOut()}>ログアウト</Button>
    </Layout>
  );
};
