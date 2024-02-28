import * as React from "react";
import Box from "@mui/material/Box";

type PageLayoutProps = {
  children: React.ReactNode;
};

export const Body = ({ children }: PageLayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "nowrap",
        p: 1,
        m: 1,
        margin: 0,
        bgcolor: "background.paper",
        borderRadius: 1,
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
};
