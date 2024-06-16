import React, { useState, useEffect } from 'react';
import logo from './img/Renvnza.svg';
import logo2 from './img/mulearn-campus-logo.svg';
import { useAnimate, stagger } from 'framer-motion';
import { Link } from 'react-router-dom';
function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "ul",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" }
          ]
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" }
          ],
          ["ul", { transform: "translateX(-100%)" }, { at: "-0.1" }]
        ];

    animate([
      [
        ".bar.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      [".bar.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        ".bar.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ]);
  }, [isOpen]);

  return scope;
}

const Navbarham = () => {
  // State to manage the active class
  const [menuActive, setMenuActive] = useState(false);

  // Function to toggle the active class
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const scope = useMenuAnimation(menuActive);

  return (
    <nav className="navbar" ref={scope}>
      <a href="https://www.renvnza.in/" className="nav-logo no-space">
        <img src={logo} style={{width:'9.5rem'}} alt="Logo" />
      </a>
      <a href="https://mulearn-ucek.netlify.app/" className="nav-logo no-space mulearn">
        <img src={logo2} alt="Logo" />
      </a>
      <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
      <Link to={'/'}><li className="nav-item"><a href="" className="nav-link">Home</a></li></Link>
        <li className="nav-item"><a href="https://events.renvnza.in/" className="nav-link">More Events</a></li>
        <li className="nav-item"><a href="" className="nav-link">Contact</a></li>
        <li className="nav-item"><a href="https://www.renvnza.in/" className="nav-link">Renvnza</a></li>
      </ul>
      <div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span className={`bar top ${menuActive ? 'active' : ''}`}></span>
        <span className={`bar middle ${menuActive ? 'active' : ''}`}></span>
        <span className={`bar bottom ${menuActive ? 'active' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbarham;
