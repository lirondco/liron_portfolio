import React from "react";
import Maslool from "./screenshots/maslool.png";
import Maslool_Hover_EN from "./screenshots/hover_en_maslool.png";
import SpacedRep from "./screenshots/spaced_rep.png";
import SpacedRep_Hover_EN from "./screenshots/spaced_rep_hover_en.png";
import ForgetMeNot from "./screenshots/forgetmenot.png";
import ForgetMeNot_Hover_EN from "./screenshots/forgetmenot_hover_en.png";
import "./ProjectsEN.css";
import { Helmet } from "react-helmet-async";

export default function ProjectsEN() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const messages = [
    "PROJECTS",
    "專案",
    "PROJETS",
    "PROYECTOS",
    "פרויקטים",
    "مشاريع",
  ];
  const [messageIndex, setMessageIndex] = React.useState(0);

  const projects = [
    {
      name: "Maslool",
      image: Maslool,
      hover: Maslool_Hover_EN,
      alt: "maslool screenshot that can be clicked to go to webpage",
      description:
        "Maslool is a forum for outdoor enthusiasts where users can look up trails, provide ratings, and post comments. It also has a full moderator role functionality.",
      website: "https://maslool.lirondc.com",
      repo: "https://github.com/lirondco/maslool-client",
      technologies: [
        "JavaScript",
        "ReactJS",
        "PostgreSQL",
        "Node",
        "Express",
        "HTML5",
        "CSS",
        "Enzyme",
        "Jest",
        "Heroku",
      ],
    },
    {
      name: "Spaced Repetition",
      image: SpacedRep,
      hover: SpacedRep_Hover_EN,
      alt: "spaced repetition screenshot that can be clicked to go to webpage",
      description:
        "Spaced repetition is a language learning strategy in which the easier words that the user always gets correctly appear less frequently than words that the user finds more difficult. This project demonstrates this strategy using simple Hebrew words.",
      website: "https://spacedrep.lirondc.com/",
      repo: "https://github.com/lirondco/spaced-repetition/",
      technologies: [
        "JavaScript",
        "ReactJS",
        "PostgreSQL",
        "Node",
        "Express",
        "HTML5",
        "CSS",
        "Enzyme",
        "Jest",
        "Cypress",
        "Heroku",
        "Linked Lists"
      ],
    },
    {
      name: "ForgetMeNot",
      image: ForgetMeNot,
      hover: ForgetMeNot_Hover_EN,
      alt: "forget me not app screenshot that can be clicked to go to webpage",
      description:
        "ForgetMeNot is an app that helps you remember things in an organized manner without the constraints of a deadline. Just list it, keep it, then bring it back up when you need it.",
      website: "https://forgetmenot.lirondc.com",
      repo: "https://github.com/lirondco/forgetmenot-client",
      technologies: [
        "JavaScript",
        "ReactJS",
        "PostgreSQL",
        "Node",
        "Express",
        "HTML5",
        "CSS",
        "Enzyme",
        "Jest",
        "Heroku",
      ],
    },
  ];

  React.useEffect(() => {
    // Move on to the next message every `n` milliseconds
    let timeout;
    if (messageIndex < messages.length - 1) {
      timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 1000);
    } else if (messageIndex === messages.length - 1) {
      timeout = setTimeout(() => setMessageIndex(0), 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, messageIndex]);

  return (
    <section id="projects_EN" className="section_EN">
      <Helmet>
        <title>Liron de Castro - Projects</title>
        <meta
          name="description"
          content="This page lists down some of Liron de Castro's more prominent projects so far."
        />
      </Helmet>
      <div className="rotating_message">{messages[messageIndex]}</div>
      <ul className="projects_list_EN">
        {projects.map((project) => (
          <li key={project.name}>
            <a href={project.website} target="_blank" rel="noreferrer noopener">
              <img
                src={project.image}
                alt={project.alt}
                onMouseOver={(e) => (e.currentTarget.src = project.hover)}
                onMouseOut={(e) => (e.currentTarget.src = project.image)}
              />
            </a>
            <div className="project_list_content_EN">
              <h4 className="project_title_EN">{project.name}</h4>
              <ul className="tech_list_EN">
                {project.technologies.map((tech) => (
                  <li key={tech + project.name}>{tech}</li>
                ))}
              </ul>
              <p className="project_desc_EN">
                {project.description} Problems loading? Please check{" "}
                <a
                  href="https://status.heroku.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Heroku's status.
                </a>
              </p>
              <div className="project_links_EN">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Visit Webpage
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Visit Repo
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
