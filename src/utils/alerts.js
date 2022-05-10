import Swal from "sweetalert2"
import styles from "../assets/styles/Recruiters.module.scss"

export const alertWrongMail = navigate => {
  return Swal.fire({
    iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0001 13C13.0001 13.552 12.5521 14 12.0001 14C11.4481 14 11.0001 13.552 11.0001 13V9C11.0001 8.448 11.4481 8 12.0001 8C12.5521 8 13.0001 8.448 13.0001 9V13ZM12.0001 17C11.4481 17 11.0001 16.552 11.0001 16C11.0001 15.448 11.4481 15 12.0001 15C12.5521 15 13.0001 15.448 13.0001 16C13.0001 16.552 12.5521 17 12.0001 17ZM22.5611 16.303L14.8891 3.584C14.2901 2.592 13.2101 2 12.0001 2C10.7901 2 9.71006 2.592 9.11106 3.584L1.43906 16.303C0.871058 17.246 0.854058 18.38 1.39406 19.336C1.97306 20.363 3.09806 21 4.32806 21H19.6721C20.9021 21 22.0271 20.363 22.6061 19.336C23.1461 18.38 23.1291 17.246 22.5611 16.303Z" fill="#FF0000"/>
    </svg></i>`,
    title: `El usuario no existe`,
    confirmButtonText: "Crear cuenta",
    showCancelButton: true,
    buttonsStyling: false,
    confirmButtonText: "Confirmar",
    iconColor: "#fff",
    buttonsStyling: false,
    customClass: {
      confirmButton: `${styles.buttonsAddRecruiter}  w-lg-25 px-5 my-4 mx-2`,
      cancelButton: `${styles.buttonDeleteRecruiter} w-lg-25 px-5 my-4 mx-2`,
      loader: "custom-loader",
      title: "title",
    },
  }).then(result => {
    if (result.isConfirmed) {
      navigate("/register")
    } else if (result.isDenied) {
      navigate("/")
    }
  })
}

export const alertNewUser = () => {
  return Swal.fire({
    iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z" fill="#00FF00"/>
    </svg></i>`,
    title: "Usuario creado exitosamente",
    iconColor: "#fff",
    buttonsStyling: false,
    confirmButtonText: "OK",
    customClass: {
      confirmButton: `${styles.buttonsAddRecruiter}  w-lg-25 px-5 my-4 mx-2`,
      title: "title",
    },
  })
}

export const alertDeleteRecruiter = ({
  dispatch,
  deleteRecruiter,
  userId,
  getAllRecruiters,
  page,
  pageChange,
}) => {
  return Swal.fire({
    iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0001 13C13.0001 13.552 12.5521 14 12.0001 14C11.4481 14 11.0001 13.552 11.0001 13V9C11.0001 8.448 11.4481 8 12.0001 8C12.5521 8 13.0001 8.448 13.0001 9V13ZM12.0001 17C11.4481 17 11.0001 16.552 11.0001 16C11.0001 15.448 11.4481 15 12.0001 15C12.5521 15 13.0001 15.448 13.0001 16C13.0001 16.552 12.5521 17 12.0001 17ZM22.5611 16.303L14.8891 3.584C14.2901 2.592 13.2101 2 12.0001 2C10.7901 2 9.71006 2.592 9.11106 3.584L1.43906 16.303C0.871058 17.246 0.854058 18.38 1.39406 19.336C1.97306 20.363 3.09806 21 4.32806 21H19.6721C20.9021 21 22.0271 20.363 22.6061 19.336C23.1461 18.38 23.1291 17.246 22.5611 16.303Z" fill="#FF0000"/>
    </svg></i>`,
    title: "Eliminar Reclutador",
    text: "Esta acción es irreversible",
    iconColor: "#fff",
    showCancelButton: true,
    buttonsStyling: false,
    confirmButtonText: "Confirmar",
    customClass: {
      confirmButton: `${styles.buttonsAddRecruiter}  w-lg-25 px-5 my-4 mx-2`,
      cancelButton: `${styles.buttonDeleteRecruiter} w-lg-25 px-5 my-4 mx-2`,
      loader: "custom-loader",
      title: "title",
    },
  }).then(result => {
    if (result.isConfirmed) {
      dispatch(deleteRecruiter(userId))
      Swal.fire({
        iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z" fill="#00FF00"/>
        </svg></i>`,
        title: "Eliminar Reclutador",
        text: "El Reclutador se eliminó correctamente",
        iconColor: "#fff",
        buttonsStyling: false,
        confirmButtonText: "OK",
        customClass: {
          confirmButton: `${styles.buttonsAddRecruiter}  w-lg-25 px-5 my-4 mx-2`,
          title: "title",
        },
      })
      dispatch(pageChange({ page: 1 }))
      dispatch(getAllRecruiters({ page }))
    }
  })
}

export const alertDeleteSearch = ({
  dispatch,
  deleteSearch,
  searchId,
  pageChange,
  getSearchsList,
  page,
  estado,
  country,
  filter_start,
  filter_end,
}) => {
  return Swal.fire({
    iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0001 13C13.0001 13.552 12.5521 14 12.0001 14C11.4481 14 11.0001 13.552 11.0001 13V9C11.0001 8.448 11.4481 8 12.0001 8C12.5521 8 13.0001 8.448 13.0001 9V13ZM12.0001 17C11.4481 17 11.0001 16.552 11.0001 16C11.0001 15.448 11.4481 15 12.0001 15C12.5521 15 13.0001 15.448 13.0001 16C13.0001 16.552 12.5521 17 12.0001 17ZM22.5611 16.303L14.8891 3.584C14.2901 2.592 13.2101 2 12.0001 2C10.7901 2 9.71006 2.592 9.11106 3.584L1.43906 16.303C0.871058 17.246 0.854058 18.38 1.39406 19.336C1.97306 20.363 3.09806 21 4.32806 21H19.6721C20.9021 21 22.0271 20.363 22.6061 19.336C23.1461 18.38 23.1291 17.246 22.5611 16.303Z" fill="#FF0000"/>
      </svg></i>`,
    title: "Eliminar Busqueda",
    text: "Esta acción es irreversible",
    iconColor: "#fff",
    showCancelButton: true,
    buttonsStyling: false,
    confirmButtonText: "Confirmar",
    customClass: {
      confirmButton: `${styles.buttonsAddRecruiter}  w-lg-25 px-5 my-4 mx-2`,
      cancelButton: `${styles.buttonDeleteRecruiter} w-lg-25 px-5 my-4 mx-2`,
      loader: "custom-loader",
      title: "title",
    },
  }).then(result => {
    if (result.isConfirmed) {
      dispatch(deleteSearch(searchId))
      Swal.fire({
        iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z" fill="#00FF00"/>
          </svg></i>`,
        title: "Eliminar Busqueda",
        text: "La busqueda se eliminó correctamente",
        iconColor: "#fff",
        buttonsStyling: false,
        confirmButtonText: "OK",
        customClass: {
          confirmButton: `${styles.buttonsAddRecruiter}  w-lg-25 px-5 my-4 mx-2`,
          title: "title",
        },
      })
    }
    dispatch(pageChange({ page: 1 }))
    dispatch(
      getSearchsList({
        page: page,
        state: estado,
        country: country,
        filter_start,
        filter_end,
      })
    )
  })
}

export const alertNewRecruiter = () => {
  return Swal.fire({
    iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z" fill="#00FF00"/>
    </svg></i>`,
    title: "Usuario creado exitosamente",
    iconColor: "#fff",
    buttonsStyling: false,
    confirmButtonText: "OK",
    customClass: {
      confirmButton: `${styles.buttonsAddRecruiter}  w-lg-25 px-5 my-4 mx-2`,
      title: "title",
    },
  })
}

export const alertExistRecruiter = () => {
  return Swal.fire({
    iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0001 13C13.0001 13.552 12.5521 14 12.0001 14C11.4481 14 11.0001 13.552 11.0001 13V9C11.0001 8.448 11.4481 8 12.0001 8C12.5521 8 13.0001 8.448 13.0001 9V13ZM12.0001 17C11.4481 17 11.0001 16.552 11.0001 16C11.0001 15.448 11.4481 15 12.0001 15C12.5521 15 13.0001 15.448 13.0001 16C13.0001 16.552 12.5521 17 12.0001 17ZM22.5611 16.303L14.8891 3.584C14.2901 2.592 13.2101 2 12.0001 2C10.7901 2 9.71006 2.592 9.11106 3.584L1.43906 16.303C0.871058 17.246 0.854058 18.38 1.39406 19.336C1.97306 20.363 3.09806 21 4.32806 21H19.6721C20.9021 21 22.0271 20.363 22.6061 19.336C23.1461 18.38 23.1291 17.246 22.5611 16.303Z" fill="#FF0000"/>
    </svg></i>`,
    title: "El reclutador ya fue ingresado",
    iconColor: "#fff",
    buttonsStyling: false,
    confirmButtonText: "OK",
    customClass: {
      confirmButton: `${styles.buttonsAddRecruiter}  w-lg-25 px-5 my-4 mx-2`,
    },
  })
}

export const closeSearch = () => {
  return Swal.fire({
    iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z" fill="#00FF00"/>
    </svg></i>`,
    title: "La búsqueda se cerró correctamente",
    iconColor: "#fff",
    buttonsStyling: false,
    confirmButtonText: "OK",
    customClass: {
      confirmButton: `${styles.buttonsAddRecruiter}  w-lg-25 px-5 my-4 mx-2`,
      title: "title",
    },
  })
}

export const editNewSearch = () => {
  Swal.fire({
    iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z" fill="#00ff00"/>
    </svg></i>`,
    title: "Los cambios fueron guardados",
    showConfirmButton: false,
    iconColor: "#fff",
    timer: 2000,
    customClass: {
      title: "title fs-4 pb-5",
    },
  })
}

export const startSearch = () => {
  Swal.fire({
    iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z" fill="#00ff00"/>
    </svg></i>`,
    title: "La búsqueda se inició correctamente",
    showConfirmButton: false,
    iconColor: "#fff",
    timer: 2000,
    customClass: {
      title: "title fs-4 pb-5",
    },
  })
}

export const editSearch = () => {
  Swal.fire({
    iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z" fill="#00ff00"/>
    </svg></i>`,
    title: "Los cambios fueron guardados",
    showConfirmButton: false,
    iconColor: "#fff",
    timer: 2000,
    customClass: {
      title: "title fs-4 pb-5",
    },
  })
}

export const alertEditRecruiter = () => {
  Swal.fire({
    iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z" fill="#00ff00"/>
      </svg></i>`,
    title: "Los cambios fueron guardados",
    showConfirmButton: false,
    iconColor: "#fff",
    timer: 2000,
    customClass: {
      title: "title fs-4 pb-5",
    },
  })
}

export const alertNewPassword = () => {
  return Swal.fire({
    iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z" fill="#00FF00"/>
    </svg></i>`,
    title: "Nueva contraseña guardada",
    iconColor: "#fff",
    buttonsStyling: false,
    confirmButtonText: "OK",
    customClass: {
      confirmButton: `${styles.buttonsAddRecruiter}  w-lg-25 px-5 my-4 mx-2`,
      title: "title",
    },
  })
}