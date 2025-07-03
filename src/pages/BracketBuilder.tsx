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
        Bracket Builder is an iOS app that allows users to easily track and
        share custom tournaments
      </p>
      <h2>Features</h2>
      <p>All features are completely free</p>
      <ul className="ml-4 list-disc">
        <li>
          Create Single-elimination, double-elimination and round-robin brackets
        </li>
        <li>
          Supports up to 128 teams for single-elimination, 32 for
          double-elimination and 26 for round-robin
        </li>
        <li>
          Generate random double round-robin tournaments with new teammates each
          round
        </li>
        <li>
          Share tournament brackets as images with participants and friends
        </li>
        <li>Automatic ordering of teams based on seed</li>
        <li>Automatic "BYE" match insertion</li>
        <li>Track tournament progress directly in the app</li>
        <li>Easily remove winners</li>
        <li>Effortlessly remove winners as matches progress</li>
        <li>Light and dark mode support</li>
      </ul>
      <p>
        Perfect for organizing and tracking tournaments in pool, tennis,
        baseball, basketball, eSports, pong, die and virtually any other game
        you can imagine!
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
