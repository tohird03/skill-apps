import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { dataObject, ExpandMoreProps } from "../../Interface/muicard.interface";

import { MyComponentProps } from "../../Interface/props.interface";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard(props: dataObject) {
  const dispatch = useDispatch();
  const likeArr = useSelector((state) => state);
  const { data } = props;
  console.log(likeArr);
  
  return (
    <Card
      sx={{ maxWidth: 300, mb: 3, display: "flex", flexDirection: "column" }}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <img src={data?.category?.image} alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data?.title}
        subheader={moment(data?.creationAt).format("LLL")}
      />
      <CardMedia
        component="img"
        height="194"
        image={data?.images[0]}
        alt="Paella dish"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {data?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          id={data?.id}
          onClick={() => dispatch({ type: "ADDLIKE", payload: data })}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
