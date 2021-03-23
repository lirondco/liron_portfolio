import React from 'react'
import Maslool from './screenshots/masloolpic.png'
import './ProjectsEN.css'

export default function ProjectsEN() {
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
        <section className='projects_EN'>
            <div className="rotating_message">{messages[messageIndex]}</div>
        </section>
    )
}