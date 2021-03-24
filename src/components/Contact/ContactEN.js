import React from "react";
import LinkedIn from "./linkedinnormal.png";
import Github from "./githubnormal.png";
import Twitter from "./twitternormal.png";
import Mail from "./emaillogo.png";
import "./ContactEN.css";

export default function ContactEN() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const messages = [
    "CONTACT ME",
    "聯絡我",
    "CONTACTEZ",
    "CONTÁCTEME",
    "צור איתי קשר",
    "اتصل بي",
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
    <section id="contact_EN" className="section_EN" lang="en" dir="ltr">
      <div className="rotating_message">{messages[messageIndex]}</div>
      <div className="body_text_EN">
        <p>Let's talk! Below are my contact details.</p>
        <p>
          {" "}
          You can contact me by email, view my GitHub page, or contect with me
          on LinkedIn and Twitter.
        </p>
      </div>
      <div className="contact_logos_EN">
        <a href="https://www.linkedin.com/in/liron-de-castro/">
          <img src={LinkedIn} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/lirondco/">
          <img src={Github} alt="Github Logo" />
        </a>
        <a href="https://twitter.com/lirondecastro">
          <img src={Twitter} alt="Twitter logo" />
        </a>
        <a href="mailto:liron.decastro@gmail.com">
          <img src={Mail} alt="Email symbol" />
        </a>
      </div>
    </section>
  );
}
