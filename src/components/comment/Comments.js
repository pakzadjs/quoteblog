import React from "react";

// GraphQL
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../graphql/queries";

const Comments = ({ slug }) => {
  const { loading, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return null;
  console.log(data);

  return <div>Comments</div>;
};

export default Comments;
