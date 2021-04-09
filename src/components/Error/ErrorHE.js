import React from "react";
import { Helmet } from "react-helmet-async";
import ErrorImg from "./error.png";
import "./Error.css";

export default function ErrorHE() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const messages = ["OOPS", "哎呀", "אופס", "يي"];
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
    <section id="Error_HE" className="section_HE" lang="he" dir="rtl">
      <Helmet>
        <title>לירון דה קסטרו - שגיאה</title>
        <meta name="description" content="שגיאה. דף זה לא זמין." />
      </Helmet>
      <div className="rotating_message" role="banner" aria-label="page error">
        {messages[messageIndex]}
      </div>
      <div className="body_text_HE">
        <p>נראה לי שהייתם לא אמורים להיות פה.</p>
        <img
          className="error_img"
          src={ErrorImg}
          alt="road construction sign"
        />
      </div>
    </section>
  );
}
