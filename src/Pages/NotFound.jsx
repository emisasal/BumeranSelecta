import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://www.bumeran.com.ar/candidate/static/media/error-page-404.5d3d2368.svg"
        alt="Not found"
      />
      <div>
        <p className={styles.title}>La sección que buscas no existe</p>
        <p className={styles.paragraph}>
          Haz click <Link to="/">aqui</Link> para regresar a la página principal
        </p>
      </div>
    </div>
  );
};

export default NotFound;
