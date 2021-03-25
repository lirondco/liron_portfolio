import React from "react";
import Portrait from "./photoplaceholder.png";
import { Helmet } from "react-helmet";
import "./AboutHE.css";

export default function AboutHE() {
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
    <section id="about_HE" className="section_HE" lang="he" dir="rtl">
      <Helmet>
        <title>לירון דה קסטרו - מי אני</title>
        <meta
          name="description"
          content="שמי לירון דה קסטרו ואני מפתחת פול-סטאק שגרה בדרום קליפורניה. כרגע
          אני מתמחה ביצירת וניהול מסדי נתונים אחוריים באמצעות PostgreSQL ו-
          Express.js, ובפיתוח אתרים חזיתיים באמצעות CSS, HTML5, React.js ו-
          jQuery. אני גם מפתחת טסטים באמצעות Enzyme, Jest, Chai, Mocha ו-
          Supertest. בצד אני גם מנתחת נתונים ומציירת תרשימים ומפות מקיפים אך
          גם קלים לקריאה."
        />
      </Helmet>
      <div className="rotating_message">{messages[messageIndex]}</div>
      <div className="about_content_HE">
        <div className="about_image_HE">
          <img src={Portrait} alt="portrait of myself" />
        </div>
        <div className="about_text_HE">
          <p>דף שבה אני כותבת על עצמי? אוי ואבוי אני אעשה כמיטב יכולתי!</p>
          <p>
            שמי לירון דה קסטרו ואני מפתחת פול-סטאק שגרה בדרום קליפורניה. כרגע
            אני מתמחה ביצירת וניהול מסדי נתונים אחוריים באמצעות PostgreSQL ו-
            Express.js, ובפיתוח אתרים חזיתיים באמצעות CSS, HTML5, React.js ו-
            jQuery. אני גם מפתחת טסטים באמצעות Enzyme, Jest, Chai, Mocha ו-
            Supertest. בצד אני גם מנתחת נתונים ומציירת תרשימים ומפות מקיפים אך
            גם קלים לקריאה.
          </p>
          <p>
            מאז ומתמיד אפילו בכיתה ד׳ התעניינתי במחשבים, במפות, ובגרפים יפים
            וצבועים עד כדי כך שלימדתי את עצמי HTML בסיסי ואקסל. לימוד HTML גם
            עזר לי לגלות דברים שמעולם לא חשבתי שאתחבר אליו שהוא לימוד שפות חדשות
            לא רק בדיבור, בכתיבה, ובקריאה אבל גם בהיסטוריה ובתכונות של אלו שפות.
            מאז עברתי כברת דרך ארוכה עם תואר ראשון ביחסים בינלאומיים בשמי, יכולת
            לדבר, לקרוא, ולכתוב עברית, אנגלית, ספרדית, ופיליפינית והכי חשוב, יש
            לי כישורים שמאפשרים לי להיות מפתחת פול סטאק טובה. אני גם אוהבת
            להעסיק את המוח שלי ובגלל זה אני ממשיכה ללמוד. בינתיים אני משפרת את
            הכישורים שלי במיפוי ובעיצוב גרפיקה ו-UI.
          </p>
          <p>
            בזמן שאני לא עובדת אני נמצאת בחוץ מגלה את הטבע, הולכת לשום מקום בעיר
            חדשה שבחיים לא ביקרתי, מנסה לבשל מתכון חדש, או מנסה חוויה חדשה
            שמעולם לא חוויתי.
          </p>
        </div>
      </div>
    </section>
  );
}
