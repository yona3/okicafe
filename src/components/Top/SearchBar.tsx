import { useKeywordStore } from "@/states";
import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const setGlobalKeyword = useKeywordStore((state) => state.setKeyword);

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
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
        onSubmit={(event) => {
          event.preventDefault();
          setGlobalKeyword(keyword);
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
          onClick={(event) => {
            event.preventDefault();
            setGlobalKeyword(keyword);
          }}
        >
          検索
        </Button>
      </Box>
    </Container>
  );
};
