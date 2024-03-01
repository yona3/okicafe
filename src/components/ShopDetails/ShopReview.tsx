import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const data = [
  {
    name: "與那嶺輝",
    comment: "雰囲気良くて、美味しかった！",
  },
  {
    name: "當銘 塁",
    comment: "また行きたい！",
  },
  {
    name: "田中",
    comment: "店員さんが丁寧な対応してくれた！",
  },
  {
    name: "佐藤",
    comment: "店員さんが丁寧な対応してくれた！",
  },
  {
    name: "宮城",
    comment: "店員さんが丁寧な対応してくれた！",
  },
  {
    name: "宮城",
    comment: "店員さんが丁寧な対応してくれた！",
  },
];

export default function ShopReview() {
  return (
    <List sx={{ width: "100%", maxWidth: 1500, bgcolor: "background.paper" }}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={item.name}
                src={`/static/images/avatar/${index + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  {item.comment}
                </React.Fragment>
              }
            />
          </ListItem>
          {index < data.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
