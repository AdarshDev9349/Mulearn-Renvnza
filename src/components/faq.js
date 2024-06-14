import React, { useState } from 'react';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Valorant?",
      answer: "Valorant is a team-based tactical shooter and first-person shooter developed and published by Riot Games."
    },
    {
      question: "How can I join the events?",
      answer: "You can join the events by registering through our official website or contacting our event organizers."
    },
    {
        question: "What is Valorant?",
        answer: "Valorant is a team-based tactical shooter and first-person shooter developed and published by Riot Games."
      },
      {
        question: "What is Valorant?",
        answer: "Valorant is a team-based tactical shooter and first-person shooter developed and published by Riot Games."
      },
      {
        question: "What is Valorant?",
        answer: "Valorant is a team-based tactical shooter and first-person shooter developed and published by Riot Games."
      },
   
  ];

  return (
    <section id="faq">
      <div className="faq__container">
        <h2 className="faq__title">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="faq__item">
            <div className="faq__question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span className="faq__toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`faq__answer ${activeIndex === index ? 'faq__answer--active' : ''}`}>
              <p  style={{fontSize:'1.5rem'}}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
