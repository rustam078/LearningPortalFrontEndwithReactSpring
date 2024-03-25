import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "./Card";
import styles from "./Card.module.css";
import SignForm from "../components/user/SignForm";
import { motion, useScroll, useTransform } from "framer-motion";
import welcomeimg from "../images/datastore.jpg";
const LandingPage = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scroll, setScrollY] = useState(0);
  const { scrollY } = useScroll();
  useEffect(() => {
    // Function to update scrollY state on scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener and update scrollY on scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ywelcome = useTransform(scrollY, [0, 200], [0, -100]);
  const opacitysec = useTransform(
    scrollY,
    [0, 200, 300, 400],
    [1, 0.7, 0.5, 0]
  );
  const scaleText = useTransform(
    scrollY,
    [0, 100, 150, 200, 300],
    [1, 1.2, 1.4, 1.2, 1]
  );

    // Define different animations for laptop and mobile views
    const yText = useTransform(
      scrollY,
      [0, 200, 300, 400, 500],
      [0, 150, 250, 350, 350]
    );
  
    // For mobile view
    const yTextMobile = useTransform(
      scrollY,
      [0, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,1300,1400,1500,1600],
      [0, 150, 240, 340, 440, 540, 640, 740, 840, 940, 1040, 1140,1240,1340,1440,1540]
    );
  
    // Determine which yText value to use based on viewport width
    const yTextToUse = window.innerWidth > 768 ? yText : yTextMobile;
  

  const h1Style = {
    color: scroll > 280 ? "black" : "white",
  };
  const contentClass = scroll < 225 ? 'hero-content' : 'color-content';

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar">
          <div
            className="logo"
            onClick={() => {
              const contactSection = document.getElementById("movetop");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <span className={styles.logoo}>Learning</span> Portal
          </div>
          <ul className="nav-links">
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              className={activeLink === "features" ? "active-link" : ""}
            >
              <a href="#features" onClick={() => handleLinkClick("features")}>
                Features
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              className={activeLink === "about" ? "active-link" : ""}
            >
              <a href="#about" onClick={() => handleLinkClick("about")}>
                AboutUs
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              className={activeLink === "contact" ? "active-link" : ""}
            >
              <a href="#contact" onClick={() => handleLinkClick("contact")}>
                Login
              </a>
            </motion.li>
            {/* <li><Link to="/login">Login</Link></li> */}
          </ul>
        </nav>
      </header>
      <section className="hero" id="movetop">
        <motion.img
          style={{ opacity: opacitysec, y: ywelcome }}
          className="welcome"
          src={welcomeimg}
          alt="a welcome image"
          id=" welcome image"
        />
        <motion.div
          className={contentClass}
          style={{ scale: scaleText, y: yTextToUse }}
        >
          <h1 style={h1Style}>Welcome to Our Awesome Website</h1>
          <p style={h1Style}>Discover amazing features and services.</p>
          <button
            className="cta-button"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get Started
          </button>
        </motion.div>
      </section>
      <section className={styles.features} id="features" >
        <div className={styles.app}>
          <h1>Features</h1>
          <div className={styles.cardContainer}>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        {/* <BasicScatter/> */}
      </section>
      <section className="about" id="about">
        <h1>About Us</h1>
        <p className="aboutus">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
          hendrerit elit. Duis ut turpis sit amet risus semper ullamcorper. In
          hac habitasse platea dictumst. Nullam et varius nisl. Etiam faucibus
          eros eget neque viverra, vel dignissim mauris tincidunt. Nam tristique
          est sapien, sed egestas enim placerat a. Suspendisse potenti. Nam a
          risus in urna pulvinar pulvinar vel quis felis. Mauris aliquam
          sollicitudin lorem nec lobortis. Donec porta tincidunt elementum. Ut
          nec neque ut lacus convallis pretium sed id mi. Praesent sed porta
          ipsum. Morbi hendrerit mauris quis consequat lobortis. Pellentesque
          malesuada tristique felis, id rhoncus nibh congue in. Donec bibendum
          sit amet erat eget pretium. Nullam quis vestibulum ipsum. Vivamus
          posuere nisl sit amet pharetra imperdiet. Aenean ac orci nec est
          interdum feugiat ut quis massa. Donec nec risus nec ligula ultricies
          commodo. Vestibulum vitae hendrerit tortor. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Praesent sagittis dictum
          tincidunt. Donec eu quam sit amet elit ornare facilisis. Ut sed
          fermentum est. Vivamus ullamcorper nulla euismod purus porttitor, eu
          placerat ex tincidunt. Donec ligula enim, dignissim ac ultricies id,
          pretium a ante. Nulla facilisi. Nam egestas tortor a risus porta, in
          interdum urna vulputate. Nunc aliquam ultricies elit consequat tempor.
          Fusce venenatis eros at ex interdum vehicula. Nam congue aliquet
          hendrerit. Donec at tellus volutpat, mattis massa sollicitudin,
          efficitur est. Praesent orci tellus, accumsan eu erat ac, bibendum
          iaculis ipsum. Donec vitae volutpat orci. Cras consectetur nisi eros,
          sed sollicitudin neque ornare molestie. Nulla vel magna enim. Nam
          luctus lectus est, pulvinar placerat quam lacinia non. Nulla volutpat
          magna leo. Pellentesque in porttitor massa. Etiam dapibus purus vel
          iaculis commodo. Nulla volutpat nulla non hendrerit pretium.
          
        </p>
      </section>
      <section className="contact" id="contact">
        <SignForm />
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
