import React from "react";
import LinkedIn from "./linkedinnormal.png";
import Github from "./githubnormal.png";
import Twitter from "./twitternormal.png";
import Mail from "./emaillogo.png";
import { Helmet } from "react-helmet";
import "./ContactHE.css";

export default function ContactHE() {
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
    <section id="contact_HE" className="section_HE" lang="he" dir="rtl">
      <Helmet>
        <title>לירון דה קסטרו - צור קשר</title>
        <meta
          name="description"
          content="תוכלו ליצור עם לירון דה קסטרו קשר באמצעות מייל, טוויטר, או לינקד-אין. תוכלו גם
          לראות את הרפוסיטורים שלי בגיטהאב."
        />
      </Helmet>
      <div className="rotating_message">{messages[messageIndex]}</div>
      <div className="body_text_HE">
        <p>בואו נדבר! להלן פרטי ההתקשרות שלי.</p>
        <p>
          {" "}
          תוכלו ליצור איתי קשר באמצעות מייל, טוויטר, או לינקד-אין. תוכלו גם
          לראות את הרפוסיטורים שלי בגיטהאב.
        </p>
      </div>
      <div className="contact_logos_HE">
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
