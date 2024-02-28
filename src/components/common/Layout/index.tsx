import { ReactNode } from "react";
import Header from "../Header";
import { Body } from "../Body";
import Footer from "../Footer";
import { Box } from "@mui/material";

type PageLayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        {<Header />}
        {<Body>{children}</Body>}
        {<Footer />}
      </Box>
    </>
  );
};
