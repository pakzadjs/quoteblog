import React from "react";

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const CardEL = ({ title, slug, coverPhoto, author }) => {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
      <CardHeader
        avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
        title={
          <Typography component="p" variant="p" color="text.secendary">
            {author.name}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>

      <Divider variant="middle" sx={{margin: '10px'}} />

      <CardActions>
         <Button variant="outlined" size="small" sx={{width: '100%', borderRadius: 3}}>مطالعه مقاله</Button>
      </CardActions>
    </Card>
  );
};

export default CardEL;
