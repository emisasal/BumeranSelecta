import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button, Form, Dropdown, Modal } from "react-bootstrap"
import useInput from "../hooks/useInput"
import { useSelector, useDispatch } from "react-redux"
import { deleteSearch, getSearchsList } from "../store/searchs"
import { pageChange } from "../store/page"
import styles from "../assets/styles/Recruiters.module.scss"
import { alertDeleteSearch } from "../utils/alerts"
import PaginationComp from "../commons/Pagination"

const Search = () => {
  const page = useSelector(state => state.page)
  const start_date = useInput()
  const end_date = useInput()
  const [estado, setEstado] = useState("Todas")
  const [country, setCountry] = useState("Todos")

  //Modal
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState({})

  const handleClose = () => setShow(false)
  const handleShow = search => {
    setSelected(search)
    setShow(true)
  }

  //dispatch y selector
  const dispatch = useDispatch()
  const search = useSelector(state => state.search.data)

  //carga de todas las búsquedas
  useEffect(() => {
    dispatch(
      getSearchsList({
        page: page,
        state: estado,
        country: country,
        filter_start: start_date.value,
        filter_end: end_date.value,
      })
    )
  }, [page, estado, country, start_date.value, end_date.value])

  //eliminar busqueda
  const handleDelete = (e, searchId) => {
    e.preventDefault()
    alertDeleteSearch({
      dispatch,
      deleteSearch,
      searchId,
      pageChange,
      getSearchsList,
      page,
      estado,
      country,
      filter_start: start_date.value,
      filter_end: end_date.value,
    })
  }

  //traer todas las búsquedas al cargar esta sección
  const handleEstado = est => {
    dispatch(pageChange({ page: 1 }))
    setEstado(est)
  }

  const handleFilterByCountry = (e, cntry) => {
    e.preventDefault()
    dispatch(pageChange({ page: 1 }))
    setCountry(cntry)
  }

  //iconos de estado de búsqueda
  const handleIcons = state => {
    if (state === "Nueva")
      return "M11.5 14.5996V9.4006L14.309 11.9996L11.5 14.5996ZM12.339 7.4526C11.841 6.9906 11.114 6.8706 10.488 7.1456C9.878 7.4116 9.5 7.9806 9.5 8.6296V15.3706C9.5 16.0196 9.878 16.5886 10.488 16.8546C10.711 16.9526 10.948 16.9996 11.181 16.9996C11.604 16.9996 12.019 16.8446 12.338 16.5486L15.98 13.1786C16.311 12.8726 16.5 12.4436 16.5 11.9996C16.5 11.5566 16.311 11.1266 15.98 10.8216L12.339 7.4526ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
    if (state === "Iniciada")
      return "M12 16C11.448 16 11 15.552 11 15C11 14.448 11.448 14 12 14C12.552 14 13 14.448 13 15C13 15.552 12.552 16 12 16ZM12 12C10.346 12 9 13.346 9 15C9 16.654 10.346 18 12 18C13.654 18 15 16.654 15 15C15 13.346 13.654 12 12 12ZM18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V11C6 10.448 6.448 10 7 10H8H10H14H16H17C17.552 10 18 10.448 18 11V19ZM10 6.111C10 4.947 10.897 4 12 4C13.103 4 14 4.947 14 6.111V8H10V6.111ZM17 8H16V6.111C16 3.845 14.206 2 12 2C9.794 2 8 3.845 8 6.111V8H7C5.346 8 4 9.346 4 11V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V11C20 9.346 18.654 8 17 8Z"
    if (state === "Cerrada")
      return "M12 16C11.448 16 11 15.552 11 15C11 14.448 11.448 14 12 14C12.552 14 13 14.448 13 15C13 15.552 12.552 16 12 16ZM12 12C10.346 12 9 13.346 9 15C9 16.654 10.346 18 12 18C13.654 18 15 16.654 15 15C15 13.346 13.654 12 12 12ZM18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V11C6 10.448 6.448 10 7 10H8H10H14H16H17C17.552 10 18 10.448 18 11V19ZM10 6.111C10 4.947 10.897 4 12 4C13.103 4 14 4.947 14 6.111V8H10V6.111ZM17 8H16V6.111C16 3.845 14.206 2 12 2C9.794 2 8 3.845 8 6.111V8H7C5.346 8 4 9.346 4 11V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V11C20 9.346 18.654 8 17 8Z"
  }

  //links según estado
  const handleLink = (state, searchid) => {
    if (state === "Nueva") return `/startSearch/${searchid}`
    if (state === "Iniciada") return `/rating/${searchid}`
    if (state === "Cerrada") return ""
  }

  //colores de icono según estado
  const handleColors = state => {
    if (state === "Nueva") return "#CA3BD8"
    if (state === "Iniciada") return "#219879"
    if (state === "Cerrada") return "grey"
  }

  const handleHovers = state => {
    if (state === "Nueva") return "Iniciar búsqueda"
    if (state === "Iniciada") return "Cerrar búsqueda"
    if (state === "Cerrada") return "Esta búsqueda ya se encuentra cerrada"
  }

  const handleEdit = (state, searchid) => {
    if (state === "Nueva") return `/editNewSearch/${searchid}`
    if (state === "Iniciada") return `/search/${searchid}`
    if (state === "Cerrada") return ""
  }

  const handleStartDate = (start_date) => {
    dispatch(pageChange({ page: 1 }))
  }

  const handleEndDate = (end_date) => {
    dispatch(pageChange({ page: 1 }))
  }

  if (!search.filas) return <h1 className={styles.container}></h1>

  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div className="row d-flex align-items-center mb-lg-2">
          <div className="col-12 justify-content-center text-center col-lg-3 d-flex justify-content-lg-end">
            <div className="pt-5 mb-5 fs-4 title">Lista de Búsquedas</div>
          </div>

          <div className="col-12 pb-5 text-center text-lg-end col-lg-8 ps-lg-0 pb-lg-0 pe-lg-0">
            <Link to="/addSearch">
              <Button
                className={`w-lg-25 mb-3 px-5  px-md-4  px-lg-5 pb-lg-1 mt-lg-2 mb-lg-3 ${styles.buttonDeleteRecruiter}`}
              >
                Agregar Búsqueda
              </Button>
            </Link>{" "}
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center pb-lg-3">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="row">
              <div className="col-lg-6 text-center">
                <Dropdown>
                  <Dropdown.Toggle
                    className={`w-lg-25 mb-3 px-5  px-md-4  px-lg-5 pb-lg-1 mb-lg-3 ${styles.addSearchBtn}`}
                    id="dropdown-basic"
                  >
                    Filtrar por Estado
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={`w-75 ${styles.carlAcutis}`}>
                    <Dropdown.Item
                      onClick={() => handleEstado("Todas")}
                      href="#/action-1"
                      className="title fw-bold"
                    >
                      Todas
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleEstado("Nueva")}
                      href="#/action-4"
                      className="nueva title"
                    >
                      Nuevas
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleEstado("Iniciada")}
                      href="#/action-2"
                      className="iniciada title"
                    >
                      Iniciadas
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleEstado("Cerrada")}
                      href="#/action-4"
                      className="title"
                    >
                      Cerradas
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="col-lg-6 text-center">
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className={`w-lg-25 mb-3 px-5 px-md-4 px-lg-5 pb-lg-1 mb-lg-3 ${styles.addSearchBtn}`}
                  >
                    Filtrar por País
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.carlAcutis}>
                    <Dropdown.Item
                      onClick={e => handleFilterByCountry(e, "Todos")}
                    >
                      Todos
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={e => handleFilterByCountry(e, "Argentina")}
                    >
                      Argentina
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={e => handleFilterByCountry(e, "Chile")}
                    >
                      Chile
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={e => handleFilterByCountry(e, "Colombia")}
                    >
                      Colombia
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={e => handleFilterByCountry(e, "Ecuador")}
                    >
                      Ecuador
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={e => handleFilterByCountry(e, "Colombia")}
                    >
                      Colombia
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={e => handleFilterByCountry(e, "México")}
                    >
                      México
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={e => handleFilterByCountry(e, "Panamá")}
                    >
                      Panamá
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={e => handleFilterByCountry(e, "Perú")}
                    >
                      Perú
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={e => handleFilterByCountry(e, "Uruguay")}
                    >
                      Uruguay
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          <Form
            className={`${styles.form} col-12 col-md-12 col-lg-6 mt-3 mt-lg-1`}
          >
            <div className="row">
              <div className="col-3 mt-2 ps-5 col-md-5 text-md-end px-md-0  text-center col-lg-3 pe-lg-1 title">
                Inicio
              </div>
              <Form.Group
                className="col-7 pb-3 col-md-4 ps-md-0 col-lg-3"
                controlId="formGridCity"
              >
                <Form.Control
                  className={"inputLogin rounded-pill"}
                  {...start_date}
                  type="date"
                  onClick={()=> handleStartDate()}
                />
              </Form.Group>
              <div className="col-3 mt-2 ps-5 col-md-5 text-md-end px-md-0 text-center pe-lg-1 col-lg-1 title">
                Cierre
              </div>

              <Form.Group
                className="col-7 col-md-4 ps-md-0 col-lg-3"
                controlId="formGridCity"
              >
                <Form.Control
                  className={"inputLogin rounded-pill"}
                  {...end_date}
                  type="date"
                  onClick={()=> handleEndDate()}
                />
              </Form.Group>
            </div>
          </Form>
        </div>

        {/* Tabla */}
        <div className="container-fluid pt-lg-4 pe-0 pe-md-3">
          <div className="row text-center sticky-top bg-light border-bottom border-2 border-dark py-3">
            <div className="col-4 col-md-3 col-lg-1">
              <div className="row">
                <div className="col-1 col-md-1 col-lg-2">
                  <strong>#</strong>
                </div>
                <div className="col-1 ps-4 col-md-3 col-lg-7">
                  <strong>Estado</strong>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-1 col-lg-1 ps-lg-1">
              <strong>País</strong>
            </div>
            <div className="d-none d-lg-block col-2 ps-lg-1">
              <strong>Área</strong>
            </div>
            <div className="col-4 col-md-6 col-lg-2">
              <strong>Posición</strong>
            </div>
            <div className="d-none d-lg-block col-1">
              <strong>Vacantes</strong>
            </div>
            <div className="d-none d-lg-block col-2">
              <strong>Fecha de Inicio</strong>
            </div>
            <div className="d-none d-lg-block col-2">
              <strong>Fecha de Cierre</strong>
            </div>
          </div>
          {search.filas.map((search, i) => {
            return (
              <div
                className={`row py-3 border border-1 title ${styles.hoverPointer}`}
              >
                <div className="col-4 col-md-3 col-lg-1">
                  <div className="row">
                    <div className="col-1 col-md-1 col-lg-1">{i + 1}</div>
                    <div
                      className={`col-1 ps-4 col-md-1 col-lg-1 ps-lg-4 ${
                        search.state_search === "Nueva"
                          ? "nueva"
                          : search.state_search === "Iniciada"
                          ? "iniciada"
                          : search.state_search === "Presentada"
                          ? "presentada"
                          : search.state_search === "Revision"
                          ? "revision"
                          : "#000"
                      }`}
                    >
                      {search.state_search}
                    </div>
                  </div>
                </div>

                <div className="col-3 col-md-2 col-lg-1 ps-lg-4">
                  {search.country}
                </div>
                <div className="d-none d-lg-block col-lg-2 ps-lg-5">
                  {search.area_search}
                </div>
                <div className="col-5 col-md-4 text-center col-lg-2">
                  {search.position}
                </div>
                <div className="d-none d-lg-block col-lg-1 text-center">
                  {search.vacancies}
                </div>

                <div className="d-none d-lg-block col-lg-2 text-center">
                  {search.start_date}
                </div>
                <div className="d-none d-lg-block col-lg-2 text-center">
                  {search.end_date}
                </div>

                <div className="col-12 pt-4 ms-4 col-md-2 pt-md-0 col-lg-1 pt-lg-0 ms-lg-0">
                  <div className="row">
                    <div className="col-3 col-lg-3 ps-0">
                      <i
                        title="Ver detalles de búsqueda"
                        className={styles.pointerTrash}
                        onClick={() => handleShow(search)}
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

                    <div className="col-3 col-lg-3 ps-0">
                      <Link
                        to={handleEdit(search.state_search, search.id)}
                        className={
                          search.state_search !== "Cerrada"
                            ? ""
                            : styles.cursorPointer
                        }
                      >
                        <i
                          title={
                            search.state_search !== "Cerrada"
                              ? "Editar búsqueda"
                              : "No puedes editar una búsqueda cerrada"
                          }
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
                              d="M6.1026 15.8735L9.0796 15.6025L14.6796 9.99746L11.9836 7.30046L6.3666 12.9175L6.1026 15.8735ZM13.3236 5.96146L16.0186 8.65646L17.9656 6.70646L15.2716 4.01246L13.3236 5.96146ZM4.2926 17.6855C4.0826 17.4755 3.9776 17.1835 4.0036 16.8875L4.3826 12.7175C4.4246 12.2605 4.6266 11.8295 4.9526 11.5035L13.9486 2.50746C14.6506 1.80246 15.9236 1.83746 16.6646 2.57646L19.4026 5.31446L19.4036 5.31546C20.1686 6.08146 20.1996 7.29946 19.4716 8.02946L10.4746 17.0265C10.1496 17.3515 9.7186 17.5535 9.2606 17.5955L5.0906 17.9745C5.0606 17.9765 5.0306 17.9775 4.9996 17.9775C4.7366 17.9775 4.4816 17.8735 4.2926 17.6855V17.6855ZM19.9996 20.9775C19.9996 21.5275 19.5496 21.9775 18.9996 21.9775H4.9996C4.4506 21.9775 3.9996 21.5275 3.9996 20.9775C3.9996 20.4285 4.4506 19.9775 4.9996 19.9775H18.9996C19.5496 19.9775 19.9996 20.4285 19.9996 20.9775V20.9775Z"
                              fill={
                                search.state_search !== "Cerrada"
                                  ? "#ffc107"
                                  : "grey"
                              }
                            />
                          </svg>
                        </i>
                      </Link>{" "}
                    </div>

                    <div className="className col-3 col-lg-3 ps-0 ">
                      <Link
                        to={handleLink(search.state_search, search.id)}
                        className={
                          search.state_search !== "Cerrada"
                            ? ""
                            : styles.cursorPointer
                        }
                      >
                        <i title={handleHovers(search.state_search)}>
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
                              d={handleIcons(search.state_search)}
                              fill={handleColors(search.state_search)}
                            />
                          </svg>
                        </i>
                      </Link>{" "}
                    </div>

                    <div className="className col-3 col-lg-3 ps-0">
                      <i
                        onClick={e => handleDelete(e, search.id)}
                        className={styles.pointerTrash}
                        title="Eliminar búsqueda"
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
                <Modal.Title className="title ms-auto">
                  Detalles de Búsqueda
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="title ps-5 py-5">
                <div className="pb-3"><strong>Posición:</strong> {selected.position}</div>
                <div className="pb-3"><strong>País:</strong> {selected.country}</div>
                <div className="pb-3"><strong>Área:</strong> {selected.area_search}</div>
                <div className="pb-3">
                <strong>Descripción:</strong> {selected.description_search}
                </div>
                <div className="pb-3"><strong>Vacantes:</strong> {selected.vacancies}</div>
                <div className="pb-3">
                <strong>Fecha de Inicio:</strong> {selected.start_date}
                </div>
                <div className="pb-3"><strong>Fecha de Cierre:</strong> {selected.end_date}</div>
                <div className="pb-3"><strong>Estado:</strong> {selected.state_search}</div>
              </Modal.Body>
            </Modal>
          }
        </div>
      </div>
      <PaginationComp pagesTotal={search.totalPages} />
    </>
  )
}

export default Search
