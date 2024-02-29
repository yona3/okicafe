import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

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
          {session ? (
            <Button color="inherit" onClick={() => signOut()}>
              ログアウト
            </Button>
          ) : (
            <Button color="inherit" onClick={() => signIn()}>
              ログイン
            </Button>
          )}
        </Box>
      </AppBar>
    </Box>
  );
}
