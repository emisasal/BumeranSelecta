import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import Carousel from "react-bootstrap/Carousel"
import "../assets/styles/Carousel.scss"
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  RadialLinearScale,
  ArcElement,
} from "chart.js"
import { Chart } from "react-chartjs-2"
import { PolarArea } from "react-chartjs-2"
import {
  getSearchBar,
  getSearchPolar,
  getRecruiterPolar,
  getRecruiterBar,
} from "../store/reports"
import { LogicSearch, LogicRecruiter } from "../utils/reportsLogic"

ChartJS.register(RadialLinearScale, ArcElement, Legend, Tooltip)
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
)

const colorIniciada = "rgb(0, 220, 212)"
const colorNueva = "rgb(233, 0, 102)"
const colorFinalizada = "rgb(10, 38, 238)"

const CarouselReport = () => {
  const [searchBar, setSearchBar] = useState()
  const [searchPolar, setSearchPolar] = useState()
  const [recruiterPolar, setRecruiterPolar] = useState()
  const [recruiterBar, setRecruiterBar] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSearchBar()).then(res => setSearchBar(LogicSearch(res.payload)))
    dispatch(getSearchPolar()).then(res => setSearchPolar(res.payload))
    dispatch(getRecruiterPolar()).then(res =>
      setRecruiterPolar(LogicRecruiter(res.payload))
    )
    dispatch(getRecruiterBar()).then(res => setRecruiterBar(res.payload))
  }, [])

  const optionsPolar = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
  }

  const options = {
    indexAxis: "y",
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }

  return (
    <Carousel variant="dark" className="mt-5  marginBottom">
      {searchBar ? (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdwsgb3Jset2nYdVOXkhJ7DSOExQCRO9NwA&usqp=CAU"
            height={"450px"}
          />
          <Carousel.Caption bsPrefix={"containerCarouselSearch"}>
            <div className="title text-center pb-lg-4 fs-3">
              Búsqueda por areas y estados
            </div>
            <div className="containerCarousel">
              <div>
                <Chart
                  type="bar"
                  options={options}
                  data={{
                    labels: searchBar?.map(({ area_search }) => area_search),
                    datasets: [
                      {
                        type: "bar",
                        label: "Nuevas ",
                        backgroundColor: colorIniciada,
                        data: searchBar?.map(
                          ({ state_search }) => state_search.Nueva
                        ),
                        borderColor: "white",
                        borderWidth: 2,
                      },
                      {
                        type: "bar",
                        label: "Iniciadas ",
                        backgroundColor: colorNueva,
                        data: searchBar?.map(
                          ({ state_search }) => state_search.Iniciada
                        ),
                        borderColor: "white",
                        borderWidth: 2,
                      },
                      {
                        type: "bar", //busquedas finalizadas por area
                        label: "Finalizadas",
                        backgroundColor: colorFinalizada,
                        data: searchBar?.map(
                          ({ state_search }) => state_search.Cerrada
                        ),
                        borderWidth: 2,
                      },
                    ],
                  }}
                  className="graphicBar"
                />
              </div>

              <div className="states">
                <div className="state">Nuevas</div>
                <div className="state">Iniciadas</div>
                <div className="state">Finalizada</div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ) : null}

      {searchPolar ? (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdwsgb3Jset2nYdVOXkhJ7DSOExQCRO9NwA&usqp=CAU"
            height={"450px"}
          />
          <Carousel.Caption bsPrefix={"containerCarouselSearch"}>
            <div className="title text-center pb-lg-4 fs-3">
              Búsqueda por estados
            </div>
            <div className="containerCarousel">
              <div>
                <PolarArea
                  options={optionsPolar}
                  data={{
                    labels: searchPolar?.map(
                      ({ state_search }) => state_search
                    ),
                    datasets: [
                      {
                        label: "# of Votes",
                        data: searchPolar?.map(({ count }) => count),
                        backgroundColor: [
                          colorIniciada,
                          colorNueva,
                          colorFinalizada,
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  className="graphicPolar"
                />
              </div>

              <div className="states">
                <div className="state">Nuevas</div>
                <div className="state">Iniciadas</div>
                <div className="state">Finalizada</div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ) : null}

      {recruiterPolar ? (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdwsgb3Jset2nYdVOXkhJ7DSOExQCRO9NwA&usqp=CAU"
            height={"450px"}
          />
          <Carousel.Caption bsPrefix={"containerCarouselSearch"}>
            <div className="title text-center pb-lg-4 fs-3">
              Búsquedas asignadas por reclutador
            </div>
            <div className="containerCarousel">
              <div>
                <PolarArea
                  options={optionsPolar}
                  data={{
                    labels: recruiterPolar?.map(
                      ({ active_searchs }) => active_searchs
                    ),
                    datasets: [
                      {
                        label: "# of Votes",
                        data: recruiterPolar?.map(({ count }) => count),
                        backgroundColor: [
                          colorIniciada,
                          colorNueva,
                          colorFinalizada,
                          "grey",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  className="graphicPolar"
                />
              </div>

              <div className="states">
                <div className="state">Sin asignación</div>
                <div className="state">1 asignación</div>
                <div className="state">2 asignaciones</div>
                <div className="state">3 asignaciones</div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ) : null}

      {recruiterBar ? (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdwsgb3Jset2nYdVOXkhJ7DSOExQCRO9NwA&usqp=CAU"
            height={"450px"}
          />
          <Carousel.Caption bsPrefix={"containerCarouselSearch"}>
            <div className="title text-center fs-3 pb-lg-4">
              Reclutadores por país
            </div>
            <div className="containerCarousel">
              <div className="aux">
                <Chart
                  type="bar"
                  options={options}
                  data={{
                    labels: recruiterBar?.map(({ country }) => country),
                    datasets: [
                      {
                        type: "bar",
                        label: "Reclutadores",
                        backgroundColor: "#FF8000",
                        data: recruiterBar?.map(({ count }) => count),
                        borderColor: "white",
                        borderWidth: 2,
                      },
                    ],
                  }}
                  className="graphicBarAux"
                />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ) : null}
    </Carousel>
  )
}

export default CarouselReport
