import { UserInfo } from "@/components/MyPage/UserInfo";
import { Layout } from "@/components/common/Layout";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const MyPage: FC = () => {
  return (
    <Layout>
      <Typography variant="h5">マイページ</Typography>
      <Box sx={{ marginTop: 2 }}>
        <UserInfo />
      </Box>
    </Layout>
  );
};
