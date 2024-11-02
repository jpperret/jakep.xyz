import {
  AiOutlineGithub as GithubIcon,
  AiFillLinkedin as LinkedinIcon,
  AiOutlineInstagram as InstagramIcon,
} from "react-icons/ai";

const IconRow = () => {
  const socialIcons = [
    {
      link: "https://www.instagram.com/jake.perret/",
      icon: InstagramIcon,
    },
    {
      link: "https://www.linkedin.com/in/jakeperret/",
      icon: LinkedinIcon,
    },
    {
      link: "https://github.com/jpperret",
      icon: GithubIcon,
    },
  ];

  return (
    <div className="flex justify-between">
      {socialIcons.map((social) => (
        <a
          href={social.link}
          target="_blank"
          rel="noreferrer"
          key={social.link}
        >
          <social.icon size={50} />
        </a>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <>
      <hr></hr>
      <div className="mx-auto w-fit text-center pt-2">
        <div className="flex flex-col">
          <IconRow />
          <p className="m-1">&#169;{new Date().getFullYear()} Jake Perret</p>
          <p className="m-1">My name is also John</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
