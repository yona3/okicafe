import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { grey } from "@mui/material/colors";

const REVIEW_LIST = [
  {
    name: "山田太郎",
    comment:
      "このカフェは雰囲気がとても良く、リラックスできる場所です。コーヒーの味も素晴らしく、特にブレンドがおすすめです。スタッフの対応も親切で、居心地が良いです。",
  },
  {
    name: "鈴木花子",
    comment:
      "このカフェのケーキは絶品です！種類も豊富で、どれも美味しいです。店内のインテリアも可愛くて居心地が良いです。友人とのおしゃべりに最適な場所です。",
  },
  {
    name: "田中一郎",
    comment:
      "朝食メニューが充実していて、特にパンケーキがお気に入りです。フレンチトーストもおすすめです。朝の忙しい時間でも、待ち時間が少なく助かります。",
  },
  {
    name: "佐藤まり",
    comment:
      "カフェラテが絶品です！ミルクの泡立ちが絶妙で、コーヒーの香りが豊かです。他のドリンクも美味しいので、何度も通いたくなります。",
  },
  {
    name: "伊藤健太",
    comment:
      "このカフェは静かな雰囲気が好きです。仕事や勉強に集中できるので、よく利用しています。コーヒーの質も高く、リーズナブルな価格設定なので、お気に入りの場所です。",
  },
  {
    name: "加藤美咲",
    comment:
      "このカフェのテラス席は最高です！自然光がたっぷり差し込み、開放感があります。特に晴れた日には外で過ごすのがおすすめです。",
  },
  {
    name: "吉田太一",
    comment:
      "ランチセットがリーズナブルで美味しいです。ボリュームもあり、おなかいっぱいになります。また、店内の雰囲気も居心地が良く、リラックスできます。",
  },
  {
    name: "中村花子",
    comment:
      "カフェラテが好きなので、いろいろなカフェを試していますが、このカフェのラテは本当に美味しいです。コクがあり、ほろ苦さが絶妙です。",
  },
];

export default function ShopReview() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6" sx={{ mr: 1, fontWeight: "bold" }}>
          口コミ
        </Typography>
        <Typography
          component="span"
          sx={{
            display: "flex",
            alignItems: "center",
            color: grey[600],
          }}
        >
          {REVIEW_LIST.length}件
        </Typography>
      </Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {REVIEW_LIST.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "start",
                padding: "16px 0",
              }}
            >
              <ListItemAvatar>
                <Avatar alt={item.name} src="">
                  {item.name.split("")[0]}
                </Avatar>
              </ListItemAvatar>
              {/* <Box sx={{ padding: "0 0 4px" }}> */}
              <Box>
                <Box>
                  <Typography>{item.name}</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Rating
                    name="hover-feedback"
                    value={4}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                    readOnly
                    size="small"
                  />
                  <Typography
                    sx={{ display: "inline" }}
                    component="p"
                    variant="body2"
                    color="text.primary"
                    mt={1}
                  >
                    {item.comment}
                  </Typography>
                </Box>
              </Box>
            </ListItem>
            {index < REVIEW_LIST.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
