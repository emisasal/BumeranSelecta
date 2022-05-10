import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Button, Modal } from "react-bootstrap"
import { getAllRecruiters, deleteRecruiter, getSingleRecruiter } from "../store/recruiters"
import styles from "../assets/styles/Recruiters.module.scss"
import Progress from "../commons/Progress"
import { alertDeleteRecruiter } from "../utils/alerts"
import PaginationComp from "../commons/Pagination"
import { pageChange } from "../store/page"

const Recruiters = () => {
  const dispatch = useDispatch()
  const page = useSelector(state => state.page)
  const recruiter = useSelector(state => state.recruiter.data)
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const [selected, setSelected] = useState({})

  useEffect(() => {
    dispatch(getAllRecruiters({ page: page }))
  }, [page])

  const handleShow = recruiter => {
    setSelected(recruiter)
    setShow(true)
  }

  const handleDelete = (e, userId) => {
    e.preventDefault()
    alertDeleteRecruiter({
      dispatch,
      deleteRecruiter,
      userId,
      getAllRecruiters,
      page: page,
      pageChange,
    })
  }

  const handleEdit = (id) => {
    dispatch(getSingleRecruiter(id))
    .then(()=>navigate(`/recruiter/${id}`))
  }

  if (!recruiter.filas) return <h1 className={styles.container}></h1>

  return (
    <>
      <div className={`container-fluid pe-lg-3 ${styles.container}`}>
        <div className="row d-flex align-items-center">
          <div className="col-12 justify-content-center text-center col-lg-3 d-flex justify-content-lg-end">
            <div className="pt-5 mb-5 fs-4 title">Lista de Reclutadores</div>
          </div>

          <div className="col-12 pb-5 text-end col-lg-8 ps-lg-0 pb-lg-0">
            <Link to="/AddRecruiter">
              <Button
                className={`w-lg-25 mb-3 px-5  px-md-4  px-lg-5 pb-lg-1 mt-lg-2 mb-lg-3 ${styles.buttonDeleteRecruiter}`}
              >
                Agregar Reclutador
              </Button>
            </Link>{" "}
          </div>
        </div>

        {/* Tabla */}
        <div className="container-fluid pt-lg-4  pe-md-3">
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
            <div className="d-none d-md-block col-md-3 col-lg-1">
              <strong>Búsquedas Activas</strong>
            </div>
            <div className="d-none d-md-block col-md-3 ms-lg-4 col-lg-1">
              <strong>Rating</strong>
            </div>
          </div>

          {recruiter.filas.map((recruiter, i) => {
            return (
              <div className={`row py-3 pe-1 border border-1 title`}>
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
                <div className="d-none d-md-block col-md-3 col-lg-1 ps-lg-3 text-center">
                  {recruiter.active_searchs}
                </div>
                <div className="d-none d-md-block col-md-3 text-center col-lg-1 ms-lg-5">
                  <Progress ranking={recruiter.rating} />
                </div>
                <div className="col-4 d-lg-none"></div>
                <div className="col-4 d-lg-none"></div>

                <div className="col-4 col-md-3 ms-md-5 ps-md-5 pt-md-3 col-lg-1 pt-lg-0 ms-lg-5 text-center  ps-lg-0">
                  <div className="row justify-content-end">
                    <div className="className col-3 col-lg-4">
                      <i
                        title="Ver detalles de Reclutador"
                        className={styles.pointerTrash}
                        onClick={() => handleShow(recruiter)}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9C11.448 9 11 8.552 11 8ZM11 11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z"
                            fill="#0dcaf0"
                          />
                        </svg>
                      </i>
                    </div>

                    <div className="className col-3 col-lg-4">
                        <i title="Gestionar Reclutador" className={styles.pointerTrash} onClick={()=> handleEdit(recruiter.id)}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.1026 15.8735L9.0796 15.6025L14.6796 9.99746L11.9836 7.30046L6.3666 12.9175L6.1026 15.8735ZM13.3236 5.96146L16.0186 8.65646L17.9656 6.70646L15.2716 4.01246L13.3236 5.96146ZM4.2926 17.6855C4.0826 17.4755 3.9776 17.1835 4.0036 16.8875L4.3826 12.7175C4.4246 12.2605 4.6266 11.8295 4.9526 11.5035L13.9486 2.50746C14.6506 1.80246 15.9236 1.83746 16.6646 2.57646L19.4026 5.31446L19.4036 5.31546C20.1686 6.08146 20.1996 7.29946 19.4716 8.02946L10.4746 17.0265C10.1496 17.3515 9.7186 17.5535 9.2606 17.5955L5.0906 17.9745C5.0606 17.9765 5.0306 17.9775 4.9996 17.9775C4.7366 17.9775 4.4816 17.8735 4.2926 17.6855V17.6855ZM19.9996 20.9775C19.9996 21.5275 19.5496 21.9775 18.9996 21.9775H4.9996C4.4506 21.9775 3.9996 21.5275 3.9996 20.9775C3.9996 20.4285 4.4506 19.9775 4.9996 19.9775H18.9996C19.5496 19.9775 19.9996 20.4285 19.9996 20.9775V20.9775Z"
                              fill="#ffc107"
                            />
                          </svg>
                        </i>
                    </div>

                    <div className="col-3 col-lg-4">
                      <i
                        onClick={e => handleDelete(e, recruiter.id)}
                        className={styles.pointerTrash}
                        title="Eliminar Reclutador"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="non-zero"
                            clip-rule="evenodd"
                            d="M18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6V6Z"
                            fill="#ff0000"
                          />
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {
            <Modal show={show} size="lg" onHide={handleClose}>
              <Modal.Header closeButton className="bg-info text-white">
                <Modal.Title className="ms-auto">
                  Detalles del Reclutador
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="ps-5 py-4">
                <div className="pb-3">
                  <strong>Nombre:</strong>{" "}
                  {`${selected.name} ${selected.surname}`}
                </div>
                <div className="pb-3">
                  <strong>País:</strong> {selected.country}
                </div>
                <div className="pb-3">
                  <strong>Área:</strong> {selected.area_rec}
                </div>
                <div className="pb-3">
                  <strong>Búsquedas activas:</strong> {selected.active_searchs}
                </div>
                <div className="pb-3">
                  <strong>Comentarios:</strong> {selected.description_rec}
                </div>
                <div className="pb-3">
                  <strong>Calificación Promedio:</strong> {selected.rating}
                </div>
              </Modal.Body>
            </Modal>
          }
        </div>
      </div>
      <PaginationComp pagesTotal={recruiter.totalPages} />
    </>
  )
}

export default Recruiters
