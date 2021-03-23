import React from 'react'
import Maslool from './screenshots/masloolpic.png'
import './ProjectsEN.css'

export default function ProjectsEN() {
      // eslint-disable-next-line react-hooks/exhaustive-deps
  const messages = ['PROJECTS', '專案', 'PROJETS', 'PROYECTOS', 'פרויקטים', 'مشاريع'];
  const [messageIndex, setMessageIndex] = React.useState(0);
  
  const projects = [{
      name: 'Maslool',
      image: Maslool,
      description: 'Maslool is a forum for outdoor enthusiasts where users can look up trails, provide ratings, and post comments. It also has a full moderator role functionality.',
      website: '',
      repo: '',
      technologies: []
  }]

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
        <section id='projects_EN' className='section_EN'>
            <div className='rotating_message'>{messages[messageIndex]}</div>
            <ul className='projects_list_EN'>

            </ul>
        </section>
    )
}