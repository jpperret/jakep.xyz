import React from "react";
import { IconContext } from "react-icons";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <IconContext.Provider
        value={{ color: "blue", size: "50px" }}
        style={{
          display: "flex",
          justifyContent: "spaceBetween",
          margin: 0,
          background: "#000000",
          padding: "10px",
        }}
      >
        <a href="https://www.linkedin.com/in/jakeperret/">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/jake.perret/">
          <BsInstagram />
        </a>
        <a href="https://github.com/jpperret">
          <BsGithub />
        </a>
      </IconContext.Provider>

      <p>©2022 Jake Perret. All rights reserved.</p>
      <p>My name is also John</p>
    </div>
  );
};

export default Footer;
