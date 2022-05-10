import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import useInput from "../hooks/useInput"
import { Button, Form } from "react-bootstrap"
import styles from "../assets/styles/EditRecruiter.module.scss"
import { alertEditRecruiter } from "../utils/alerts"
import { editRecruiter } from "../store/recruiters"

const EditRecruiter = () => {
  const recruiter = useSelector(state => state.recruiter.singleRecruiter)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const name = useInput(recruiter.name)
  const surname = useInput(recruiter.surname)
  const country = useInput(recruiter.country)
  const description_rec = useInput(recruiter.description_rec)
  const area_rec = useInput(recruiter.area_rec)
  const active_searchs = useInput(recruiter.active_searchs)
  const status_rec = useInput(recruiter.status_rec)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      editRecruiter({
        id: recruiter.id,
        name: name.value,
        surname: surname.value,
        country: country.value,
        description_rec: description_rec.value,
        area_rec: area_rec.value,
        active_searchs: active_searchs.value,
        status_rec: status_rec.value,
        alertEditRecruiter,
        navigate,
      })
    )
  }

  if (!recruiter) return <div></div>

  return (
    <div
      className={`container d-flex flex-column align-items-center mt-5 ${styles.container}`}
    >
      <div className="row mt-5 mb-5 fs-4 title d-flex justify-content-center">
        Editar Reclutador
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-75 formLogin d-flex flex-column "
      >
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-6">
            <Form.Group
              className="w-100 pe-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Label className="w-100 text-center title">
                Nombre
              </Form.Label>
              <Form.Control
                {...name}
                placeholder="Nombre"
                type="text"
                className="inputLogin"
                id="inputEmail4"
              />
            </Form.Group>
          </div>

          <div className="col-lg-6">
            <Form.Group
              className="w-100 ps-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Label className="w-100 text-center title">
                Apellido
              </Form.Label>
              <Form.Control
                {...surname}
                placeholder="Apellido"
                type="text"
                className="inputLogin"
                id="inputPassword4"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <Form.Group
              className="w-100 pe-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Label className="w-100 text-center title">País</Form.Label>
              <Form.Control
                {...country}
                placeholder="País"
                type="text"
                className="inputLogin"
                id="inputPassword4"
              />
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group
              className="w-100 pe-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Label className="w-100 text-center title">
                Descripción
              </Form.Label>
              <Form.Control
                {...description_rec}
                placeholder="Descripción"
                type="text"
                className="inputLogin"
                id="inputPassword4"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-12">
            <Form.Group
              className="w-100 ps-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Label className="w-100 text-center title">Áreas</Form.Label>
              <Form.Control
                {...area_rec}
                placeholder="Área"
                type="text"
                className="inputLogin"
                id="inputPassword4"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-6 text-end">
            <Link to="/recruiters">
              <Button className="mt-5 w-lg-25 px-5 px-lg-5 buttonLogin">
                Volver
              </Button>{" "}
            </Link>
          </div>
          <div className="col-6">
            <button
              type="submit"
              className={`${styles.buttonsEditRecruiter} mt-5 w-lg-25 px-5 px-lg-5`}
            >
              Aceptar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditRecruiter
