import React from "react";
import { useParams } from "react-router-dom";
import image from "./img/poster.png";
import product from "./img/product.webp";

import { Link } from "react-router-dom";

const eventDetails = {
  laser_engraving: {
    title: "Laser Engraving",
    description:
      "Explore a 5-hour hands-on workshop focusing on the fundamentals of 2D designing and fabrication using a laser cutter. Ideal for beginners and enthusiasts, this workshop covers both the creative and technical aspects of laser cutting technology. Whether you're a hobbyist, designer, or simply curious about digital fabrication, you'll gain practical skills in software like Inkscape and hands-on experience with laser cutting machines. By the end of the workshop, you'll have the knowledge and skills to create and fabricate your own projects using 2D design techniques.Please note, no food will be provided.",
    image: image,
    note: "",
    date: "3/07/2024",
    time: "10.00 AM",
    venue: "Fab Lab Trivandrum",
  },
  product_designing: {
    title: "Product Designing",
    description:
      "Experience an exciting Product Design Workshop at Renvnza in collaboration with UX SHOTS. Explore product development and design with hands-on activities and insights from industry experts. Perfect for budding designers, tech enthusiasts, and professionals.",
    image: product,
    note: " Don't miss out this opportunity and register now! Plus, free registration is available for anyone with over 10,000 karma points!",
    date: "3/07/2024",
    time: "9.30 AM",
    venue: "University College of Engineering,Kariavattom",
    link: "https://airtable.com/app0ast9KLzNwkPSe/shrzvxbBwGTJ0bbd5",
  },
  Gamedev: {
    title: "Game Development",
    description:
      "We are thrilled to announce our upcoming game development workshop in collaboration with TILTEDU, a leading institution in immersive and interactive technology education. This workshop is designed for aspiring game developers, tech enthusiasts, and anyone looking to break into the exciting world of game development.",
    image: image,
    date: "Soon",
    time: "Soon",
    venue: "University College of Engineering,Kariavattom",
  },
  uiux: {
    title: "UI/UX Workshop",
    description:
      "Join us for an immersive UI/UX workshop to elevate your design skills with the power of emotional design!Learn how to evoke emotions through color, typography, and micro-interactions, and discover techniques for creating personalized, meaningful user experiences. This hands-on event features engaging activities, interactive lectures, and real-world case studies.Don't miss the chance to transform your design approach and create more user-centric products. Register now to secure your spot and advance your UI/UX skills! ",
    image: image,
    date: "4/07/2024",
    time: "9.45 AM",
    venue: "University College of Engineering,Kariavattom",
    link: "https://airtable.com/app0ast9KLzNwkPSe/shrn7ufgJ7rFbyXiS",
  },
  "3d_printing": {
    title: "3D Printing Workshop",
    description:
      "Attend an engaging 3D Printing Workshop where you'll delve into the fundamentals of this transformative technology. Day 1 introduces Fab Labs and Mini Fab Labs in our country, and covers 3D designing using software like Rhino. Day 2 offers hands-on training with industry-standard 3D printers, enabling you to bring your designs to life. Don't miss this chance to explore the exciting world of 3D printing and enhance your design capabilities! Please note, no food will be provided.",
    image: image,
    date: "01-02 July 2024",
    time: "10.00 AM",
    venue: "Fab Lab Trivandrum",
    link:"https://airtable.com/app0ast9KLzNwkPSe/shrtR1wOiqPqxBwVW",
  },
  nexus_conclave: {
    title: "Nexus Conclave",
    description:
      "Welcome to the Nexus Conclave 2024 at RenVnza, a premier event dedicated to addressing the latest trends, challenges, and innovations in human resources. This year’s theme, Navigating the Future of Work , focuses on equipping HR professionals on various industries ,and talks by the mentors of tech communities bringing out insights how tech communities bring out a great impact on converting a campus into a dynamic and evolving workplace landscape. This conclave offers a unique opportunity to network, learn, and grow with the best in the field.",
    image: image,
    date: "Soon",
    time: "Soon",
    venue: "University College of Engineering,Kariavattom",
  },
  pcb_designing: {
    title: "PCB Designing",
    description:
      "Discover an intensive PCB Designing Workshop where you'll learn to create schematics and develop your first PCB board. This hands-on session covers essential design principles, ideation steps, and best practices for PCB development. Gain practical experience in EDA tools and understand the workflow from concept to fabrication. Perfect for beginners and those looking to refine their skills.Please note, no food will be provided.",
    image: image,
    date: "04-05 July 2024",
    time: "10.00 AM",
    venue: "Fab Lab Trivandrum",
    link:"https://airtable.com/app0ast9KLzNwkPSe/shrdAkr7O8Mc1liiQ",
  },
};

const EventDetail = () => {
  const { id } = useParams();
  const event = eventDetails[id];

  return (
    <header className="details-head">
      <nav className="navbar">
        <ul className="nav-menu">
          <Link to={"/"}>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
          </Link>

          <li className="nav-item">
            <a href="https://events.renvnza.in/" className="nav-link">
              More Events
            </a>
          </li>

          <li className="nav-item">
            <a href="#event-code" className="nav-link">
              Code of Conduct
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.renvnza.in/" className="nav-link">
              Renvnza
            </a>
          </li>
        </ul>
      </nav>

      <div className="event-detail">
        <img src={event.image}></img>
        <div className="event-info">
          <h1>{event.title}</h1>
          <p>
            <b>ABOUT : </b>
            {event.description}
          </p>
          <p>{event.note}</p>

          <ul>
            <li>DATE: {event.date}</li>
            <li>TIME: {event.time}</li>
            <li>VENUE: {event.venue}</li>
          </ul>

          <div className="btndiv" style={{ justifyContent: "center" }}>
            <a href={event.link}>
              {" "}
              <button className="eventbtn second">
                <span class="btn__inner">
                  <span class="btn__slide"></span>
                  <span class="btn__content">Register Now</span>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div class="event-code" id="event-code">
        <h1>Code of Conduct</h1>
        <p>
          By participating in MuLearn-Renvnza all attendees agree to abide by
          this Code of Conduct. Failure to comply with this Code of Conduct may
          result in removal from the event and/or further action.
        </p>
        <ul>
          <li>
            <strong>Professionalism : </strong>All attendees are expected to
            conduct themselves in a professional manner during the event. This
            includes dressing appropriately, refraining from using inappropriate
            language, and respecting the time and attention of others.
          </li>

          <li>
            <strong>Inclusivity : </strong> The event is inclusive to all
            individuals regardless of gender, ethnicity, race, religion, age, or
            any other characteristic. All attendees are expected to work towards
            creating a safe and welcoming environment for everyone involved.
          </li>
          <li>
            <strong>Communication :</strong> All attendees are expected to
            communicate respectfully with each other, including speakers,
            organisers, and fellow attendees. Any form of harassment or bullying
            will not be tolerated
          </li>
          <li>
            <strong>Timekeeping : </strong> All attendees are expected to
            respect the scheduled timing of talks, workshops, and stalls. Late
            arrivals or departures may disrupt the event flow and negatively
            impact others
          </li>
          <li>
            <strong>Safety : </strong>All attendees must prioritise their safety
            and the safety of others throughout the event. Any behaviour that
            puts others in danger will not be tolerated
          </li>
          <li>
            <strong>Reporting Incidents : </strong> If you experience any form
            of harassment, bullying, or inappropriate behaviour during the
            event, please report it to our designated Event Team immediately. We
            are committed to creating a safe and welcoming environment for
            everyone involved
          </li>
          <li>
            <strong>Accountability :</strong>All attendees are accountable for
            their own actions and should take responsibility for any
            consequences that may arise from those actions.
          </li>
        </ul>
        <p>
          By participating in MuLearn-Renvnza , you agree to abide by this Code
          of Conduct and contribute to creating a positive and inclusive
          environment for everyone involved.
        </p>
      </div>
    </header>
  );
};

export default EventDetail;
