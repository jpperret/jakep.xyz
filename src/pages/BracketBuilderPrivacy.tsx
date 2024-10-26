import { Helmet } from "react-helmet";
import React from "react";

const BracketBuilderPrivacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Bracket Builder Privacy</title>
        <link rel="icon" href="img/BracketBuilderIcon.png" />
      </Helmet>
      <h1>Bracket Builder Privacy Policy</h1>
      <p>
        <a href="/bracket-builder">Bracket Builder</a> does not collect, store,
        or transmit any personal information.
      </p>
    </>
  );
};

export default BracketBuilderPrivacy;
