import React, { useState } from 'react';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      "question": "What is RenVnza?",
      "answer": "RenVnza '24 is the techno-cultural fest hosted by the University College of Engineering Kariavattom from July 3-5. MuLearn UCEK will be hosting the events mentioned on this website during the fest."
    },
    {
      "question": "Who can participate in the events?",
      "answer": "All the events are designed with college students in mind. However, anyone who finds the event intriguing is welcome to attend."
    },
    {
      "question": "Are all events free?",
      "answer": "Except for the Dev Expo and Nexus Conclave, all events hosted by MuLearn UCEK for RenVnza have a registration fee."
    },
    {
      "question": "How many days are the events?",
      "answer": "RenVnza '24' will take place from July 3 to 5, with events scheduled between these days. Only the Dev Expo will take place on all three days of the fest."
    },
    {
      "question": "Will I get certificates for taking part in the events?",
      "answer": "Yes, certificates will be provided for all the sessions hosted during the fest."
    },
    {
      "question":"Will we be awarded KTU points for participating?",
      "answer":"Absolutely! Participants will be awarded 20 KTU points upon completion of the event. Additionally, you'll receive certificates on the spot right after the event concludes, along with some exclusive cool merchandise."
    }
   
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
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
