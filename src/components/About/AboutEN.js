import React from "react";
import Portrait from "./portrait.png";
import { Helmet } from "react-helmet-async";
import "./AboutEN.css";

export default function AboutEN() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const messages = [
    "Who is Liron",
    "誰是「Liron」",
    "Qui est Liron",
    "Quién es Liron",
    "מי זאת לירון",
    "من هي ليرون",
  ];
  const [messageIndex, setMessageIndex] = React.useState(0);

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
    <section id="about_EN" className="section_EN" lang="en" dir="ltr">
      <Helmet>
        <title>Liron de Castro - About</title>
        <meta
          name="description"
          content="My name is Liron de Castro and I am a full stack web developer
          currently based in Southern California. I currently specialize in back
          end database creation and management using PostgreSQL and Express.js,
          and in front end web development using CSS, HTML5, React.js, and
          jQuery. I also develop tests for both the server and the client sides
          using Enzyme, Jest, Chai, Mocha, and Supertest."
        />
      </Helmet>
      <div className="rotating_message">{messages[messageIndex]}</div>
      <div className="about_content_EN">
        <div className="about_image_EN">
            <img
              src={Portrait}
              alt="a stylized portrait of myself"
            />
        </div>
        <div className="about_text_EN">
          <p>A page where I talk about myself? I will try my best!</p>
          <p>
            My name is Liron de Castro and I am a full stack web developer
            currently based in Southern California. I currently specialize in
            back end database creation and management using PostgreSQL and
            Express.js, and in front end web development using CSS, HTML5,
            React.js, and jQuery. I also develop tests for both the server and
            the client sides using Enzyme, Jest, Chai, Mocha, and Supertest. On
            the side I enjoy analyzing data and creating charts and maps that
            are comprehensive but also easy to read.
          </p>
          <p>
            I have always been interested in computers and pretty maps and
            graphs since I was a child in fourth grade, so much so that I taught
            myself basic HTML and Excel. Learning HTML also helped me discover
            an interest I never thought I'd get hooked on, which is learning new
            languages and studying their history and features. Since then, I
            have come a long way with a Bachelor of Arts in International
            Relations under my name and ability to speak, read, and write in
            English, Hebrew, Spanish, and Tagalog, and most importantly having a
            set of skills that allows me to be a full stack web developer. I
            also love keeping my brain busy, so I never stop learning. Currently
            I am improving my skills in mapping, graphics and UI design.
          </p>
          <p>
            When I am not working, I can usually be found exploring nature,
            getting lost in a new city, trying out a new recipe, or trying out a
            new experience that I have not put my hands on.
          </p>
          <p>
            You know what else I really, really like? Working in teams! If you
            like what you see, why don't you{" "}
            <a href="mailto:liron.decastro@gmail.com">send me an email</a> and
            ask me to join your team?
          </p>
        </div>
      </div>
    </section>
  );
}
