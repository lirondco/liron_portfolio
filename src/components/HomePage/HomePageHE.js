import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./HomePageHE.css";

export default function HomePageHE() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const messages = ["HELLO", "大家好", "BONJOUR", "HÓLA", "שלום", "اهلا"];
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
    <section id="homepage_HE" className="section_HE" lang="he" dir="rtl">
      <Helmet>
        <title>לירון דה קסטרו - פורטפוליו</title>
        <meta
          name="description"
          content="אני מפתחת פול-סטאק מיפו שגרה בדרום קליפורניה. אני עובדת עם React.Js, jQuery, HTML5, CSS, PostgreSQL ו-Express. אם מה שאתם רוצים לא נמצא ברשימה תנסו לשאול אותי עדיין. אני גם אוהבת גרפים ומפות."
        />
      </Helmet>
      <div className="rotating_message" role="banner" aria-label="hello">{messages[messageIndex]}</div>
      <div className="body_text_HE">
        <p>
          אני מפתחת פול-סטאק מיפו שגרה בדרום קליפורניה.
          <br />
          אני עובדת עם React.Js, Next.JS, Helmet.js, AWS Lambda, DynamoDB, jQuery, HTML5, CSS, PostgreSQL ו-Express.js.
          <br />
          אני גם עושה טסטים באמצעות Jest, Enzyme, Mocha, Chai, ו-Supertest.
          <br />  
          אם מה שאתם רוצים לא נמצא ברשימה תנסו לשאול אותי עדיין.
          <br />
          אני גם עושה גרפים ומפות.
        </p>
        <p>אתן רוצות אותי בצוות שלכן? אני אוהבת לעבוד בצוותים!</p>
        <p>
          אני גם אוהבת משחקי מחשב, הטבע, בישול, ולפעמים אני גם מנסה לעשות
          צילומים. <br />{" "}
          <span className="smaller">
            דרך אגב אני גם יכולה לפתור את הקוביה ההונגרית. קוביה הונגרית … עברית
            היא שפה מוזרה מאוד.
          </span>
        </p>
      </div>
      <div className="home_links">
        <Link to="/projects">קראו על הפרויקטים שלי</Link>
        <a href="mailto:liron.decastro@gmail.com">דברו איתי</a>
      </div>
    </section>
  );
}
