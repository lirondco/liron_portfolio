import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./HomePageEN.css";

export default function HomePageEN() {
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
    <section id="homepage_EN" className="section_EN" lang="en" dir="ltr">
      <Helmet>
        <title>Liron de Castro - Portfolio</title>
        <meta
          name="description"
          content="I'm a full stack web developer based in Southern California. I
          currently work with JavaScript, React.JS, jQuery, HTML5, CSS,
          PostgreSQL, and Express. If what you need is not what I listed,
          still try asking me anyway. I also do maps and graphs."
        />
      </Helmet>
      <div className="rotating_message">{messages[messageIndex]}</div>
      <div className="body_text_EN">
        <p>I'm Liron. That's /liːron/, not /laɪːron/. </p>
        <p>
          I'm a full stack web developer based in Southern California. <br /> I
          currently work with JavaScript, React.JS, jQuery, HTML5, CSS,
          PostgreSQL, and Express. <br /> If what you need is not what I listed,
          still try asking me anyway. <br /> I also do maps and graphs.
        </p>
        <p>
          I also love video games, the outdoors, cooking, and sometimes I try
          photography too! <br />{" "}
          <span className="smaller">I can also solve the Rubik's cube.</span>
        </p>
      </div>
      <div className="home_links">
        <Link to="/projects">View my projects</Link>
        <a href="mailto:liron.decastro@gmail.com">Talk to me</a>
      </div>
    </section>
  );
}
