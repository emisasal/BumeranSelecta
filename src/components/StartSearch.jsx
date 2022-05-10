import React, { useEffect, useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useNavigate, Link } from "react-router-dom"
import { Button, Overlay, Popover, Row, Form } from "react-bootstrap"
import { getSingleSearch, editRecruiter, getAssignment } from "../store/searchs"
import Progress from "../commons/Progress"
import useInput from "../hooks/useInput"
import "../assets/styles/SearchEdit.scss"
import styles from "../assets/styles/StartSearch.module.scss"
import { startSearch } from "../utils/alerts"

const StartSearch = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const [validation, setValidation] = useState(true)
  const [recruiterInfo, setRecruiterInfo] = useState({})
  const [recruiter, setRecruiter] = useState([])
  const iniciar = useRef()

  const country = useInput()
  const area_ser = useInput()
  const position = useInput()
  const description_ser = useInput()
  const lapse_search = useInput()
  const start_date = useInput(null)

  useEffect(() => {
    dispatch(getSingleSearch(id)).then(data => {
      country.setValue(data.payload.country)
      area_ser.setValue(data.payload.area_search)
      position.setValue(data.payload.position)
      lapse_search.setValue(data.payload.lapse_search)
      return dispatch(
        getAssignment({
          country: data.payload.country,
          area_search: data.payload.area_search,
        })
      ).then(data => setRecruiter(data.payload))
    })
  }, [])

  useEffect(() => {
    dispatch(
      getAssignment({ country: country.value, area_search: area_ser.value })
    ).then(data => setRecruiter(data.payload))
  }, [area_ser.value, country.value])

  const handleStartSearch = async e => {
    e.preventDefault()
    if (!recruiterInfo.id || !start_date.value) return setValidation(false)
    await dispatch(
      editRecruiter({
        id: id,
        recruiterId: recruiterInfo.id,
        state_search: "Iniciada",
        start_date: start_date.value,
      }),
      startSearch()
    )
    navigate("/searchs")
  }

  return (
    <div className={`containerSearchEdit ${styles.container}`}>
      <div className="containerForm mt-2">
        <Form
          onSubmit={handleStartSearch}
          className="formLogin w-100 font-sans-serif"
          id="formSearch"
        >
          <Row className="mb-3"></Row>

          <div className="container-fluid  containerTable">
            <div className="row my-3">
              <div className={`${styles.titleContainer} pb-4`}>
                <h3 className={`fs-5 title ${styles.title}`}>
                  Candidatos sugeridos:
                </h3>
              </div>
              <div className="col w-100 ">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">Areas</th>
                      <th scope="col">Valoración</th>
                      <th scope="col">Selección</th>
                    </tr>
                  </thead>
                  <tbody className={styles.tbodyContainer}>
                    {recruiter.map((recruiter, i) => {
                      return (
                        <tr className={styles.userContainer}>
                          <th scope="row">{i + 1}</th>
                          <td>{recruiter.name}</td>
                          <td>{recruiter.surname}</td>
                          <td>
                            <tr>{recruiter.area_rec}</tr>
                          </td>
                          <td>
                            {" "}
                            <Progress ranking={recruiter.rating} />
                          </td>
                          <td>
                            <Form.Check
                              className="inputRadio"
                              name="group1"
                              type="radio"
                              id={1}
                              onClick={() => setRecruiterInfo(recruiter)}
                            />
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="pt-2 mb-3 fs-4 mx-5 title d-flex justify-content-center">
            Reclutador asignado:
          </div>
          <Row className="mb-3">
            <Form.Group className="col-md-4" controlId="formGridAddress1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                className={
                  description_ser.value || validation
                    ? "inputLogin rounded-pill"
                    : "err rounded-pill"
                }
                value={
                  recruiterInfo.name
                    ? `${recruiterInfo.name} ${recruiterInfo.surname}`
                    : null
                }
                placeholder="Nombre del reclutador"
              />
            </Form.Group>

            <Form.Group className="col-md-4" controlId="formGridCity">
              <Form.Label>Valoración</Form.Label>
              <Form.Control
                className={
                  lapse_search.value || validation
                    ? "inputLogin rounded-pill"
                    : "err rounded-pill"
                }
                value={recruiterInfo.rating}
                placeholder="Valoracion del reclutador"
              />
            </Form.Group>
            <Form.Group className="col-md-4" controlId="formGridCity">
              <Form.Label>Inicio de busqueda</Form.Label>
              <Form.Control
                className={
                  start_date.value || validation
                    ? "inputLogin rounded-pill"
                    : "err rounded-pill"
                }
                type={start_date.value ? "" : "date"}
                {...start_date}
              />
            </Form.Group>
          </Row>

          <div className="buttonsEditSearch">
            <Link to="/searchs">
              <Button className="mt-4 w-lg-25 px-5 px-lg-5 buttonLogin">
                Volver
              </Button>{" "}
            </Link>

            <Button
              ref={iniciar}
              className="mt-4 w-lg-25 px-5 px-lg-5 buttonsAddRecruiter"
              type="submit reset"
            >
              Iniciar
            </Button>

            <Overlay
              show={validation ? false : true}
              target={iniciar.current}
              placement="top"
              containerPadding={20}
            >
              <Popover id="popover-contained">
                <Popover.Body className={styles.popover}>
                  <strong>
                    Debe seleccionar un reclutador e indicar una fecha de inicio
                    para continuar
                  </strong>
                </Popover.Body>
              </Popover>
            </Overlay>
          </div>
          <Row />
        </Form>
      </div>
    </div>
  )
}

export default StartSearch
