import React from "react"
import styles from "../assets/styles/LandingPage.module.scss"

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div
        className={`row ${styles.secondContainer} d-flex justify-content-center`}
      >
        <div className={`col-lg-4 text-center`}>
          <img
            src="https://www.bumeran.com.ar/candidate/static/media/login.e6658ac3.svg"
            alt="imagen"
          />
        </div>
        <div
          className={`col-12 col-lg-6 mt-5 mt-lg-1 d-flex justify-content-center ${styles.txtContainer}`}
        >
          <p className="lead fs-2 title text-center text-lg-start ">
            Encontramos el Candidato Ideal
          </p>
          <p
            className={`${styles.message} px-5 px-lg-0 text-center text-lg-start`}
          >
            Somos la primera plataforma tecnológica aplicada a la selección de
            talento.
          </p>
          <p className="px-5 px-lg-0">
            Vinculamos la tecnología con la mayor red de expertos de la región y
            la base de candidatos más amplia de Latinoamérica.
          </p>
          <p className="px-5 px-lg-0">
            Reinventamos el reclutamiento por medio de procesos más
            transparentes, ágiles y asertivos; logrando una tasa de cierre mayor
            al 90%.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
