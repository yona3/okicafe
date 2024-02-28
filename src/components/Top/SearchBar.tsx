import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";

export const SearchBar = () => {
  const [keyword, setKeyword] = React.useState("");
  const onSearchClick = async () => {
    setKeyword("");
  };
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
        width: "100%",
      }}
    >
      <Box
        component="form"
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100em",
        }}
      >
        <TextField
          label="キーワードを入力してください"
          variant="standard"
          margin="normal"
          fullWidth
          value={keyword}
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            onSearchClick();
          }}
        >
          検索
        </Button>
      </Box>
    </Container>
  );
};
