import { useUser } from "@/hooks/useUser";
import { Button, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
import PersonIcon from "@mui/icons-material/Person";

export const LoginButton: FC = () => {
  const { user } = useUser();

  return (
    <>
      {user && (
        <IconButton sx={{ width: "62px", color: "inherit" }}>
          <Link
            href={`/${user.id}`}
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "inherit",
              width: "100%",
              height: "100%",
            }}
          >
            <PersonIcon />
          </Link>
        </IconButton>
      )}
      {user === null && (
        <Button color="inherit" onClick={() => signIn()}>
          ログイン
        </Button>
      )}
    </>
  );
};
