import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import "./index.css";
import img1 from "../../images/img.png";
import img2 from '../../images/img2.png';

const Projects = () => {
  const projectobj = [
    {
      title: "Rental.com",
      des: "Rental.com is a MERN full-stack app featuring a dynamic React frontend. Users enjoy secure Google authentication and manual login option. Powered by MongoDB, it enables seamless CRUD operations.",
      tech: ["Next.js", "MongoDB", "React.js", "Tailwind"],
      img: img1,
      href: "https://github.com/JayGoud7/Rental.com",
      href2: "https://rentalcom.netlify.app",
    },
    {
      title: "IMDB Clone",
      des: "IMDB Clone is featuring a dynamic React frontend with Rest Api.",
      tech: ["React.js", "Rest Api"],
      img: img2,
      href: "https://github.com/JayGoud7/IMDB_cl",
      href2: "https://imdbcl.netlify.app",
    },
  ];

  return (
    <>
      {projectobj.map((project, index) => (
        <div key={index} className="projectbox">
          <div className="hr">
            <h1>{project.title}</h1>
            <p>{project.des}</p>
            <div className="btn2">
              {project.tech.map((tech, i) => (
                <h6 key={i}>{tech}</h6>
              ))}
            </div>
          </div>
          <div className="img-divv">
            <img src={project.img} alt="img-for-pro-show" />
          </div>
          <div className="lnkss">
            <a
              className="aa"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code{" "}
              <span>
                <FaGithub />
              </span>
            </a>
            <a
              className="aa"
              href={project.href2}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo{" "}
              <span>
                <FaLink />
              </span>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
