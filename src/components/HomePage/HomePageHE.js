import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageHE.css';

export default function HomePageHE() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const messages = ['HELLO', '大家好', 'BONJOUR', 'HÓLA', 'שלום', 'اهلا'];
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
    <section id='homepage_HE' className='section_HE' lang='he' dir='rtl'>
      <div className='rotating_message'>{messages[messageIndex]}</div>
      <div className='body_text_HE'>
        <p>
          אני מפתחת פול-סטאק מיפו שגרה בדרום קליפורניה.
          <br />
          אני עובדת עם React.Js, jQuery, HTML5, CSS, PostgreSQL ו-Express.
          <br />
          אם מה שאתם רוצים לא נמצא ברשימה תנסו לשאול אותי עדיין.
          <br />
          אני גם עושה גרפים ומפות.
        </p>
        <p>
          אני גם אוהבת משחקי מחשב, הטבע, בישול, ולפעמים אני גם מנסה לעשות
          צילומים. <br />{' '}
          <span className='smaller'>דרך אגב אני גם יכולה לפתור את הקוביה ההונגרית. קוביה הונגרית … עברית היא שפה מוזרה מאוד.</span>
        </p>
      </div>
      <div className='home_links'>
        <Link to='/projects'>קראו על הפרוייקטים שלי</Link>
        <Link to='/contact'>דברו איתי</Link>
      </div>
    </section>
  );
}
