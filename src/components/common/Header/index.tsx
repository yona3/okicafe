import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "@/components/common/Header/LoginButton";

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 2%",
          }}
        >
          <Box>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Image src="/Logo.png" alt="Logo" width={60} height={60} />
              <Typography
                variant="h6"
                component="div"
                sx={{ display: "inline-block", color: "text.primary" }}
              >
                Okicafe
              </Typography>
            </Link>
          </Box>
          <LoginButton />
        </Box>
      </AppBar>
    </Box>
  );
}
