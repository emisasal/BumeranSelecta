import React, { useState, useEffect } from "react"
import { Dropdown } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { getRecruitersPerArea, topRecruiters } from "../store/reports"
import "../assets/styles/Reports.scss"
import Progress from "../commons/Progress"
import Carousel from "../Pages/Carousel"

const Reports = () => {
  const dispatch = useDispatch()
  const [areaValue, setAreaValue] = useState("todas")
  const [country, setCountry] = useState("todos")
  const [reports, setReports] = useState()

  useEffect(() => {
    dispatch(
      getRecruitersPerArea({ areaValue: areaValue, country: country })
    ).then(res => setReports(res.payload))
  }, [areaValue, country])

  useEffect(() => {
    dispatch(topRecruiters()).then(res => setReports(res.payload))
  }, [])

  if (!areaValue) return <h1 className="footerBotton">No Data</h1>

  return (
    <>
      <Carousel />
      <div className={`container-fluid`}>
        <div className="row d-flex align-items-center mb-lg-2">
          <div className="col-12 justify-content-center text-center col-lg-4 d-flex justify-content-lg-end">
            <div className="pt-5 mb-5 fs-4 title">Top Reclutadores</div>
          </div>

          <div className="col-12 pb-5 text-center col-md-6 text-md-end col-lg-4 ps-lg-0 pb-lg-0 pe-lg-2 text-lg-end">
            <Dropdown>
              <Dropdown.Toggle
                className={`w-lg-25 mb-3 px-5 px-md-5 px-lg-5 pb-lg-1 mt-lg-2 mb-lg-3 buttonsAddRecruiter`}
                id="dropdown-basic"
              >
                Filtrar por Área
              </Dropdown.Toggle>

              <Dropdown.Menu className="w-50 carlAcutis">
                <Dropdown.Item onClick={() => setAreaValue("todas")}>
                  Todas
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAreaValue("Administración")}>
                  Administración
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAreaValue("Comercial")}>
                  Comercial
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAreaValue("Producción")}>
                  Producción
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAreaValue("Oficios")}>
                  Oficios
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAreaValue("Tecnología")}>
                  Tecnología
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAreaValue("Logística")}>
                  Logística
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAreaValue("Gastronomía")}>
                  Gastronomía
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAreaValue("Recursos Humanos")}>
                  Recursos Humanos
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAreaValue("Salud")}>
                  Salud
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAreaValue("Ingenierías")}>
                  Ingenierías
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setAreaValue("Atención al Cliente")}
                >
                  Atención al Cliente
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAreaValue("Marketing")}>
                  Marketing
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAreaValue("Construcción")}>
                  Construcción
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setAreaValue("Comercio Exterior")}
                >
                  Comercio Exterior
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="col-12 pb-5 text-center col-md-6 text-md-start col-lg-4 ps-lg-0 pb-lg-0 pe-lg-0 text-lg-start">
            <Dropdown>
              <Dropdown.Toggle
                className={`w-lg-25 mb-3 px-5 px-md-5  px-lg-5 pb-lg-1 mt-lg-2 mb-lg-3 buttonsAddRecruiter`}
                id="dropdown-basic"
              >
                Filtrar por País
              </Dropdown.Toggle>

              <Dropdown.Menu className="w-50 carlAcutis">
                <Dropdown.Item onClick={e => setCountry("todos")}>
                  Todos
                </Dropdown.Item>
                <Dropdown.Item onClick={e => setCountry("Argentina")}>
                  Argentina
                </Dropdown.Item>
                <Dropdown.Item onClick={e => setCountry("Chile")}>
                  Chile
                </Dropdown.Item>
                <Dropdown.Item onClick={e => setCountry("Colombia")}>
                  Colombia
                </Dropdown.Item>
                <Dropdown.Item onClick={e => setCountry("Ecuador")}>
                  Ecuador
                </Dropdown.Item>
                <Dropdown.Item onClick={e => setCountry("Colombia")}>
                  Colombia
                </Dropdown.Item>
                <Dropdown.Item onClick={e => setCountry("México")}>
                  México
                </Dropdown.Item>
                <Dropdown.Item onClick={e => setCountry("Panamá")}>
                  Panamá
                </Dropdown.Item>
                <Dropdown.Item onClick={e => setCountry("Perú")}>
                  Perú
                </Dropdown.Item>
                <Dropdown.Item onClick={e => setCountry("Uruguay")}>
                  Uruguay
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* Tabla */}
      {reports ? (
        <div className="container-fluid pt-lg-4  pe-md-3 footerBotton">
          <div className="row text-center sticky-top bg-light border-bottom border-2 border-dark py-3">
            <div className="col-2 col-md-1 col-lg-1 text-start">
              <strong>#</strong>
            </div>
            <div className="col-6 col-md-3 col-lg-2 text-start">
              <strong>Nombre y Apellido</strong>
            </div>

            <div className="col-4 col-md-2 col-lg-2 text-lg-start">
              <strong>País</strong>
            </div>
            <div className="d-none d-md-block col-md-3 col-lg-3">
              <strong>Área</strong>
            </div>
            <div className="d-none d-md-block col-md-3 col-lg-2">
              <strong>Búsquedas Activas</strong>
            </div>
            <div className="d-none d-md-block col-md-3 col-lg-2 ps-lg-1 ">
              <strong>Rating</strong>
            </div>
          </div>

          {reports.map((recruiter, i) => {
            return (
              <div className={`row py-3 pe-1 border border-1 title`} key={i}>
                <div className="col-2 pb-3 col-md-1 col-lg-1 pb-lg-0">
                  {i + 1}
                </div>
                <div className="col-6 pb-3 col-md-3 col-lg-2 pb-lg-0 text-lg-start">
                  {`${recruiter.name}`} {`${recruiter.surname}`}
                </div>

                <div className="col-4 col-md-2 col-lg-2 ps-lg-2">
                  {recruiter.country}
                </div>
                <div className="d-none d-md-block col-md-3 col-lg-3 ps-lg-3">
                  {recruiter.area_rec}
                </div>
                <div className="d-none d-md-block col-md-3 col-lg-2 text-lg-center ps-lg-3">
                  {recruiter.active_searchs}
                </div>
                <div className="d-none d-md-block col-md-3 text-center col-lg-1 pe-lg-1 ms-lg-5">
                  <Progress ranking={recruiter.rating} />
                </div>
              </div>
            )
          })}
        </div>
      ) : null}
    </>
  )
}

export default Reports
