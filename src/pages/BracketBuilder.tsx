import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const BracketBuilder: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Bracket Builder</title>
          <meta
            name="description"
            content="Bracket Builder: Easily track and share tournament status"
          />
          <link rel="icon" href="/img/BracketBuilderIcon.png" />
          <meta name="keywords" content="Bracket, Builder, Jakep" />
        </Helmet>
      </HelmetProvider>

      <div className="flex items-center justify-between">
        <h1>Bracket Builder</h1>
        <a href="https://apps.apple.com/app/id1669378849">
          <img src="img/AppStore.svg" alt="Download in App Store" />
        </a>
      </div>
      <p>
        Bracket Builder is an iOS app that allows users to create and track
        custom tournaments
      </p>
      <p>Easily track and share tournament status</p>
      <p>Requires iOS 16.0 or newer</p>
      <h2>Features</h2>
      <p>All features are free to use</p>
      <ul className="ml-4 list-disc">
        <li>
          Supports creating brackets of sizes ranging from 2 to 32 teams for
          double elimination and up to 64 for single elimination
        </li>
        <li>Single and double elimination brackets</li>
        <li>Automatic ordering of teams based on seed</li>
        <li>Automatic insertion of "BYE" matches</li>
        <li>Optionally randomize team seeds</li>
        <li>Keeps track of winners and losers</li>
        <li>Easily remove winners</li>
        <li>Light and dark mode support</li>
        <li>Share brackets as an image with participants or friends</li>
      </ul>
      <p>
        Organize and track tournaments for pool, tennis, baseball, basketball,
        pong, die and anything else you can think of!
      </p>
      <h2>Feedback</h2>
      <p>
        Please send any bug reports or other suggestions to{" "}
        <a href="mailto:brackbuilder@gmail.com">brackbuilder@gmail.com</a>
      </p>
      <h2>Privacy Policy</h2>
      <p>
        <a href="/bracket-builder/privacy">Bracket Builder Privacy Policy</a>
      </p>
    </>
  );
};

export default BracketBuilder;
