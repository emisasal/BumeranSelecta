import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useNavigate, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, Form, Row } from "react-bootstrap"
import { getSingleSearch, editRecruiter, getAssignment } from "../store/searchs"
import arr from "../hooks/array"
import useInput from "../hooks/useInput"
import { editNewSearch } from "../utils/alerts"
import "../assets/styles/SearchEdit.scss"
import styles from "../assets/styles/Recruiters.module.scss"

const EditNewSearch = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const [validation, setValidation] = useState(true)
  const [recruiterInfo, setRecruiterInfo] = useState({})
  const [recruiter, setRecruiter] = useState([])

  const country = useInput()
  const area_ser = useInput()
  const position = useInput()
  const description_ser = useInput()
  const vacancies = useInput()
  const lapse_search = useInput()
  const start_date = useInput(null)

  useEffect(() => {
    dispatch(getSingleSearch(id)).then(data => {
      country.setValue(data.payload.country)
      area_ser.setValue(data.payload.area_search)
      position.setValue(data.payload.position)
      description_ser.setValue(data.payload.description_search)
      vacancies.setValue(data.payload.vacancies)
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

  const handleEdit = async e => {
    e.preventDefault()
    await dispatch(
      editRecruiter({
        id: id,
        recruiterId: recruiterInfo.id,
        description_search: description_ser.value,
        country: country.value,
        area_search: area_ser.value,
        position: position.value,
        vacancies: parseInt(vacancies.value),
        lapse_search: lapse_search.value,
      })
    )
    editNewSearch()
    navigate("/searchs")
  }

  return (
    <div className={`containerSearchEdit ${styles.container}`}>
      <div className="containerForm mt-2">
        <div className=" mb-0 fs-4 mx-5 title d-flex justify-content-center">
          Editar Búsqueda
        </div>
        <Form
          onSubmit={handleEdit}
          className="pt-lg-4 formLogin w-100 font-sans-serif"
          id="formSearch"
        >
          <Row className="mb-4">
            <Form.Group className="col-md-4 top" controlId="formGridState">
              <Form.Label>País</Form.Label>
              <Form.Select
                className={
                  country.value || validation
                    ? "inputLogin rounded-pill"
                    : "err rounded-pill"
                }
                {...country}
                placeholder={country.value}
              >
                <option selected disabled value="">
                  Países
                </option>
                {arr.country.map(i => (
                  <option>{i}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="col-md-4 top" controlId="formGridState">
              <Form.Label>Área</Form.Label>
              <Form.Select
                className={
                  area_ser.value || validation
                    ? "inputLogin rounded-pill"
                    : "err rounded-pill"
                }
                {...area_ser}
              >
                <option selected disabled value="">
                  Área
                </option>
                {arr.area.map(i => (
                  <option>{i}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="col-md-4" controlId="formGridAddress2">
              <Form.Label>Posición</Form.Label>
              <Form.Control
                className={
                  position.value || validation
                    ? "inputLogin rounded-pill"
                    : "err rounded-pill"
                }
                {...position}
                placeholder="Posición"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group className="col-md-4" controlId="formGridAddress1">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                className={
                  description_ser.value || validation
                    ? "inputLogin rounded-pill"
                    : "err rounded-pill"
                }
                {...description_ser}
                placeholder="Descripción"
              />
            </Form.Group>

            <Form.Group className="col-md-4 top" controlId="formGridState">
              <Form.Label>Vacantes</Form.Label>
              <Form.Select
                className={
                  vacancies.value || validation
                    ? "inputLogin rounded-pill"
                    : "err rounded-pill"
                }
                {...vacancies}
              >
                <option selected disabled value="">
                  Vacantes
                </option>
                {arr.vacancies().map(i => (
                  <option>{i}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="col-md-4" controlId="formGridCity">
              <Form.Label>Tiempo estimado de cierre</Form.Label>
              <Form.Control
                className={
                  lapse_search.value || validation
                    ? "inputLogin rounded-pill"
                    : "err rounded-pill"
                }
                type={lapse_search.value ? "" : "date"}
                {...lapse_search}
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
              className="mt-4 w-lg-25 px-5 px-lg-5 buttonsAddRecruiter"
              type="submit reset"
            >
              Editar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default EditNewSearch
