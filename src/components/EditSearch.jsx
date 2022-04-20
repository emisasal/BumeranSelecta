import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleSearch,
  editRecruiter,
  getAssignment,
} from "../store/searchs";
import { getSingleRecruiter } from "../store/recruiters"
import { useParams } from "react-router";
import { useNavigate, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Progress from "../commons/Progress";
import arr from "../hooks/array";
import useInput from "../hooks/useInput";
import "../assets/styles/SearchEdit.scss";
import styles from "../assets/styles/Recruiters.module.scss";
import { editSearch} from "../utils/alerts";

const EditSearch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedRecruiter = useSelector(state => state.recruiter.singleRecruiter)
  const { id } = useParams();
  const [validation, setValidation] = useState(true);
  const [recruiter, setRecruiter] = useState([]);

  const country = useInput();
  const area_ser = useInput();
  const position = useInput();
  const description_ser = useInput();
  const vacancies = useInput();
  const lapse_search = useInput();
  const start_date = useInput(null);
  const recruiterId = useInput()

  useEffect(() => {
    dispatch(getSingleSearch(id)).then((data) => {
      country.setValue(data.payload.country);
      area_ser.setValue(data.payload.area_search);
      position.setValue(data.payload.position);
      description_ser.setValue(data.payload.description_search);
      vacancies.setValue(data.payload.vacancies);
      lapse_search.setValue(data.payload.lapse_search);
      start_date.setValue(data.payload.start_date)
      recruiterId.setValue(data.payload.recruiterId)
      return dispatch(
        getAssignment({
          country: data.payload.country,
          area_search: data.payload.area_search,
        })
      ).then((data) => setRecruiter(data.payload));
    });
  }, []);

  useEffect(async () => {
    await dispatch(getSingleRecruiter(recruiterId.value))
    dispatch(
      getAssignment({ country: country.value, area_search: area_ser.value })
    ).then((data) => setRecruiter(data.payload));
  }, [area_ser.value, country.value, recruiterId.value]);

  const handleSubmit = async e => {
    e.preventDefault()
    let data = [
      country.value,
      area_ser.value,
      position.value,
      description_ser.value,
      vacancies.value,
      lapse_search.value,
    ]
    let state = false
    if (!selectedRecruiter.id || !start_date.value) return setValidation(false); 
    else {
      await dispatch(
        editRecruiter({
          id: id,
          recruiterId: selectedRecruiter.id,
          description_search: description_ser.value,
          country: country.value,
          area_search: area_ser.value,
          position: position.value,
          vacancies: parseInt(vacancies.value),
          lapse_search: lapse_search.value,
          state_search: "Iniciada",
          start_date: start_date.value,
        })
      );
      editSearch()
      navigate("/searchs");
    }
  }

  if(!selectedRecruiter.id) return <div></div>

  return (
    <div className={`containerSearchEdit ${styles.container}`}>
      <div className="containerForm mt-2">
        <div className=" mb-0 fs-4 mx-5 title d-flex justify-content-center">
          Editar Búsqueda Iniciada
        </div>
        <Form
          onSubmit={handleSubmit}
          className="pt-lg-4 formLogin w-100 font-sans-serif"
          id="formSearch"
        >
          <Row className="mb-3">
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
              <Form.Label>Area</Form.Label>
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
              <Form.Label>Descripcìon</Form.Label>
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

          <div className="container-fluid  containerTable">
            <div className="row my-3">
              <div className={`${styles.titleContainer} pb-3`}>
                <h3 className={`mt-3 fs-5 title ${styles.title}`}>
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
                      <th scope="col">Áreas</th>
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
                              id={i}
                              onClick={() => dispatch(getSingleRecruiter(recruiter.id))}
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
                  selectedRecruiter.name ? `${selectedRecruiter.name} ${selectedRecruiter.surname}`
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
                value={selectedRecruiter.rating}
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
};

export default EditSearch;
