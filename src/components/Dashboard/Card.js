import React from "react";
import styles from "./Card.module.css"; // Import the CSS Module
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ icon,link, count, type,btn }) => {
  return (
    <motion.div   whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 500 }} className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles["card-content"]}>
        <p className={styles["card-description"]}>{type}</p>
        <h2 className={styles["card-title"]}>{count}</h2>
        <Link to={link} className={styles["card-button"]}>{btn}</Link>
      </div>
    </motion.div>
  );
};

export default Card;
