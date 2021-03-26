import React from "react";
import Maslool from "./screenshots/maslool.png";
import Maslool_Hover_HE from "./screenshots/hover_he_maslool.png";
import SpacedRep from "./screenshots/spaced_rep.png";
import SpacedRep_Hover_HE from "./screenshots/spaced_rep_hover_he.png";
import ForgetMeNot from "./screenshots/forgetmenot.png";
import ForgetMeNot_Hover_HE from "./screenshots/forgetmenot_hover_he.png";
import "./ProjectsHE.css";
import { Helmet } from "react-helmet-async";

export default function ProjectsHE() {
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
      name: "מסלול",
      image: Maslool,
      hover: Maslool_Hover_HE,
      alt: "צילום מסך של האתר מסלול",
      description:
        "מסלול הוא אתר פורום לאוהבי הטבע שמאפשר למשתמשים לחפש טיולים וגם להוסיף רייטינג ותגובות. אפשר גם להוסיף אדמינים עם תפקידים מיוחדים משלהם לאתר.",
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
      ],
    },
    {
      name: "שינון בסירוגין",
      image: SpacedRep,
      hover: SpacedRep_Hover_HE,
      alt: "צילום מסך של האתר למידת שפה העברית בעמצאות שיטת שינון בסירוגין",
      description:
        "שינון בסירוגין היא שיטת למידה שמשלבת הגדלת מרווחי זמן בין ביקורת עוקבת לבין חומר שנלמד כדי לנצל את השפעת הפיסוק הפסיכולוגית.  פרויקט זה מדגים שיטה זו באמצעות מילים פשוטות בעברית.",
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
      ],
    },
    {
      name: "פורגטמינאט (אל תשכח אותי)",
      image: ForgetMeNot,
      hover: ForgetMeNot_Hover_HE,
      alt: "צילום מסך של האתר אל תשכח אותי שבאנגלית פורגט מי נאט",
      description:
        "פורגטמינאט הוא אתר שיעזור לך לזכור דברים בצורה מסודרת ללא הגבלת זמן. תרשמו, תשמרו, ותוציאו רק אם צריך.",
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
    <section id="projects_HE" className="section_HE" lang="he" dir="rtl">
      <Helmet>
        <title>לירון דה קסטרו - פרויקטים</title>
        <meta
          name="description"
          content="בדף זה מפורטים כמה מהפרויקטים הבולטים של לירון דה קסטרו עד כה."
        />
      </Helmet>
      <div className="rotating_message">{messages[messageIndex]}</div>
      <ul className="projects_list_HE">
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
            <div className="project_list_content_HE">
              <h4 className="project_title_HE">{project.name}</h4>
              <ul className="tech_list_HE">
                {project.technologies.map((tech) => (
                  <li key={tech + project.name}>{tech}</li>
                ))}
              </ul>
              <p className="project_desc_HE">
                {project.description} בעיות בטעינה? נא לבדוק את{" "}
                <a
                  href="https://status.heroku.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  הסטטוס של הרוקו.
                </a>
              </p>
              <div className="project_links_HE">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  כנסו לאתר
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  כנסו לגיטהאב
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
