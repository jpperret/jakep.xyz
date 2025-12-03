import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Jake Perret</title>
          <meta name="description" content="Jake Perret Personal Website" />
          <meta name="keywords" content="Jake, Perret, jakep" />
        </Helmet>
      </HelmetProvider>

      <h1>Jake Perret</h1>
      <p>Welcome to my website</p>

      <h2>Recent Projects</h2>
      <h3>
        <a href="https://github.com/jpperret/python-planner">Python Planner</a>
      </h3>
      <div className="grid grid-cols-2 items-center gap-x-2">
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
