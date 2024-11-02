import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const BracketBuilderPrivacy: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Bracket Builder Privacy</title>
          <link rel="icon" href="/img/BracketBuilderIcon.png" />
        </Helmet>
      </HelmetProvider>

      <h1>Bracket Builder Privacy Policy</h1>
      <p>
        <a href="/bracket-builder">Bracket Builder</a> does not collect, store,
        or transmit any personal information.
      </p>
    </>
  );
};

export default BracketBuilderPrivacy;
