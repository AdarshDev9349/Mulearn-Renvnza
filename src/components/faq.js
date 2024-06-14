import React, { useState } from 'react';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "lorem ipsum dolor sit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, possimus"
    },
    {
      question: "lorem ipsum dolor sit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, possimus"
    },
    {
      question: "lorem ipsum dolor sit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, possimus"
      },
      {
      question: "lorem ipsum dolor sit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, possimus"
      },
      {
      question: "lorem ipsum dolor sit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, possimus"
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
