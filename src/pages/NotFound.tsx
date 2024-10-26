import React from "react";
import { Helmet } from "react-helmet";

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Jake P | 404 Error</title>
        <meta name="description" content="Jake P page not found" />
      </Helmet>
      <h1>404: Not Found</h1>
      <p>You hit a route that doesn&#39;t exist.</p>
    </>
  );
};

export default NotFound;
