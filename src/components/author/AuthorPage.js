import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";

import { Avatar, Container, Grid, Typography } from "@mui/material";

const AuthorPage = () => {
  const { slug } = useParams();

  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: slug },
  });

  if (loading) return <h3>Loading ...</h3>;

  if (errors) return <h3>Error</h3>;

  console.log(data);
  const { avatar, name, field } = data.author;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={2}>
            {name}
          </Typography>
          <Typography component="p" variant="h5">
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {data.author.description.html}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
