import "../assets/styles/Footer.scss";
import { FaLinkedinIn, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid container-Footer mt-4">
        <div className="row">
          <div className="col-12 col-lg-4 text-center text-lg-end imgFooter">
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/05/logo-footer.png"
                    class="bumeran"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/staffing.png"
                    class="staffing"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/laborum-selecta.png"
                    class="laborum"
                    alt="..."
                  />
                </div>

                <div class="carousel-item">
                  <img
                    src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/konzerta.png"
                    class="konzerta"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/multi.png"
                    class="multi"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 fs-4 text-center col-lg-6 text-lg-start textFooter">
            Reinventando el reclutamiento
          </div>

          <div className="col-12 mt-3 d-flex justify-content-center justify-content-lg-start col-lg-2 mt-lg-0">
            <div className="circle d-flex justify-content-center  align-items-center  rounded-circle">
              <FaLinkedinIn className="fs-5 iconFooter" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  subFooter">
        <div className="">
          <a href="#">
            <FaArrowUp className="fs-3 text-white arrowTop" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
