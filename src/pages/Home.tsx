import React from "react";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Jake Perret</title>
        <meta name="description" content="Jake Perret Personal Website" />
        <meta name="keywords" content="Jake, Perret, jakep" />
      </Helmet>

      <h1>Jake Perret</h1>
      <p>Welcome to my website</p>

      <h2>Recent Projects</h2>

      <h3>
        <a href="/bracket-builder">Bracket Builder</a>
      </h3>
      <div className="flex space-x-2">
        <div className="flex flex-col justify-between">
          <p>My first iOS app</p>
          <a href="https://apps.apple.com/app/id1669378849">
            <img src="img/AppStore.svg" alt="Download in App Store" />
          </a>
          <p>
            Bracket Builder is an iOS app to help users create and share
            tournaments.
          </p>
        </div>

        <img
          className="h-36 w-auto outline"
          src="img/BracketBuilderIcon.png"
          alt="Bracket Builder Icon"
        />
      </div>
      <h3>
        <a href="https://github.com/jpperret/python-planner">Python Planner</a>
      </h3>
      <div className="grid grid-cols-2 gap-x-2 items-center">
        <p>
          When searching for a PDF weekly planner to use with my iPad I was
          unable to find any I particularly liked, so I decided to create my
          own. To make it easily editable and able to be updated for future
          years I decided to make it with Python. The code to generate it and
          resulting PDF can be found in the{" "}
          <a href="https://github.com/jpperret/python-planner">GitHub Repo</a>.
        </p>
        <img
          className="outline"
          src="img/python-planner.png"
          alt="PythonPlanner"
        />
      </div>

      <h2>Contact</h2>
      <p>
        To get in contact with me, feel free to reach out on{" "}
        <a href="https://www.instagram.com/jake.perret/">Instagram</a> or{" "}
        <a href="https://www.linkedin.com/in/jakeperret/">Linkedin</a> PMs
      </p>
    </>
  );
};

export default Home;
