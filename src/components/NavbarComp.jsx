import {
  Container,
  Nav,
  Navbar,
  NavItem,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { sendLogoutRequest } from "../store/user"
import styles from "../assets/styles/NavbarComp.module.scss"

import { pageChange } from "../store/page"

const NavbarComp = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleLogOut = () => {
    dispatch(sendLogoutRequest())
  }

  const handlePageReset = () => {
    dispatch(pageChange({ page: 1 }))
  }

  return (
    <Navbar expand="lg" sticky="top" bg="white">
      <Container fluid className="">
        {/* Navbar Logo */}
        <Navbar.Brand className="ms-4">
          <Link to="/">
            <img
              src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/logo-1.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>

        {/* Navbar Menu */}
        <div className="d-none d-lg-block">
          <Nav className="ms-auto my-2 my-lg-0">
            {user.data.id ? (
              <>
                <Nav.Link>
                  <Link className={styles.menu} to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link to="/recruiters">
                  <Link
                    className={styles.menu}
                    to="/recruiters"
                    onClick={() => handlePageReset()}
                  >
                    Reclutadores
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className={styles.menu}
                    to="/searchs"
                    onClick={() => handlePageReset()}
                  >
                    Búsquedas
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className={styles.menu} to="/reports">
                    Reportes
                  </Link>
                </Nav.Link>
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link className={styles.menu} onClick={handleLogOut} to="/">
                      Cerrar Sesión
                    </Link>
                  </Nav.Link>
                  <NavItem className={styles.welcomeName}>
                    Bienvenido {`${user.data.firstName} ${user.data.surname}`}
                  </NavItem>
                </Nav>
              </>
            ) : (
              <Nav className="me-auto">
                <Nav.Link>
                  <Link className={styles.menu} to="/login">
                    Iniciar Sesión
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className={styles.menu} to="/register">
                    Registrarse
                  </Link>
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </div>

        {/* Navbar Responsive (Offcanvas-menu-lateral) */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          className={styles.sizeOffCanvas}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header
            closeButton
            className={styles.offcanvasHeader}
          ></Offcanvas.Header>
          <Offcanvas.Body className={styles.boxOffCanvas}>
            <Nav className="justify-content-end flex-grow-1">
              <NavDropdown.Divider className={styles.divider} />
              {user.data.id ? (
                <Nav>
                  <Nav.Link>
                    <Link className={styles.linkOffCanvas} to="/">
                      Home
                    </Link>
                  </Nav.Link>
                  <NavDropdown.Divider className={styles.divider} />
                  <Nav.Link to="/recruiters">
                    <Link className={styles.linkOffCanvas} to="/recruiters">
                      Reclutadores
                    </Link>
                  </Nav.Link>
                  <NavDropdown.Divider className={styles.divider} />
                  <Nav.Link>
                    <Link className={styles.linkOffCanvas} to="/searchs">
                      Búsquedas
                    </Link>
                  </Nav.Link>
                  <NavDropdown.Divider className={styles.divider} />
                  <Nav.Link>
                    <Link className={styles.linkOffCanvas} to="/reports">
                      Reportes
                    </Link>
                  </Nav.Link>
                  <NavDropdown.Divider className={styles.divider} />
                  <Nav.Link>
                    <Link
                      className={styles.linkOffCanvas}
                      onClick={handleLogOut}
                      to="/"
                    >
                      Cerrar Sesión
                    </Link>
                  </Nav.Link>
                  <NavDropdown.Divider className={styles.divider} />
                  <NavItem className={styles.welcomeName}>
                    Bienvenido {`${user.data.firstName} ${user.data.surname}`}
                  </NavItem>
                </Nav>
              ) : (
                <Nav>
                  <Nav.Link>
                    <Link className={styles.linkOffCanvas} to="/login">
                      Iniciar Sesión
                    </Link>
                  </Nav.Link>
                  <NavDropdown.Divider className={styles.divider} />
                  <Nav.Link>
                    <Link className={styles.linkOffCanvas} to="/register">
                      Registrarse
                    </Link>
                  </Nav.Link>
                </Nav>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavbarComp
