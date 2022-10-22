import React from "react";
import { useParams } from "react-router-dom";

// Components
import Loader from "../shared/Loader";

// GraphQL
import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../../graphql/queries";

const BlogPage = () => {
  const { slug } = useParams();

  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  if (errors) return <h3>Error</h3>;

  console.log(data);
  return <div>blog page</div>;
};

export default BlogPage;
