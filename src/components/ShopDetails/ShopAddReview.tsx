// import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Fab,
  Modal,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import { yellow } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: "18px 24px",
  borderRadius: 2,
};

// TODO: ファイル分ける
export default function ShopAddReview() {
  // rating
  const [value, setValue] = useState<number | null>(4);

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ position: "fixed", right: 42, bottom: 32 }}>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <EditIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            口コミ投稿
          </Typography>
          {/* review form */}
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            {/* rating */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                size="medium"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Box
                sx={{
                  ml: 1,
                  fontSize: 16,
                  color: yellow[800],
                  fontWeight: "bold",
                }}
              >
                {value}
              </Box>
            </Box>
            {/* text field */}
            <Box sx={{ width: "100%" }}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
                placeholder="口コミを書く"
                sx={{ width: "100%", marginTop: 2 }}
              />
            </Box>
            {/* submit button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                marginTop: 3,
                width: "100%",
              }}
            >
              <Button variant="contained" onClick={handleClose}>
                投稿する
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
