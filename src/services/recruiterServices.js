import axios from "axios"
import { alertNewRecruiter, alertExistRecruiter } from "../utils/alerts"

export const allRecruitersServices = async ({ page }) => {
  try {
    const allRecruiters = await axios.get(
      `http://localhost:3001/api/recruiter/page/${page}`
    )
    return allRecruiters.data
  } catch (error) {
    throw error
  }
}

export const singleRecruiterServices = async id => {
  try {
    const singleRecruiter = await axios.get(
      `http://localhost:3001/api/recruiter/${id}`
    )
    return singleRecruiter.data
  } catch (error) {
    throw error
  }
}

export const editRecruiterServices = async ({
  id,
  name,
  surname,
  country,
  description_rec,
  area_rec,
  active_searchs,
  status_rec,
  alertEditRecruiter,
  navigate
}) => {
  try {
    const editRecruiter = await axios.put(
      `http://localhost:3001/api/recruiter/${id}`,
      {
        name: name,
        surname: surname,
        country: country,
        description_rec: description_rec,
        area_rec: area_rec,
        active_searchs: active_searchs,
        status_rec: status_rec,
      }
    )
    alertEditRecruiter()
    navigate("/recruiters")
    return editRecruiter.data
  } catch (error) {
    throw error
  }
}

export const deleteRecruiterServices = async id => {
  try {
    const deleteRecruiter = await axios.delete(
      `http://localhost:3001/api/recruiter/${id}`
    )
    return deleteRecruiter.data
  } catch (error) {
    throw error
  }
}

export const addRecruiterServices = async ({
  name,
  surname,
  country,
  description_rec,
  area_rec,
  dispatch,
  pageChange,
  navigate,
}) => {
  try {
    const addRecruiter = await axios.post(
      "http://localhost:3001/api/recruiter/add",
      {
        name: name,
        surname: surname,
        country: country,
        description_rec: description_rec,
        area_rec: area_rec,
      }
    )
    alertNewRecruiter()
    dispatch(pageChange({ page: 1 }))
    navigate("/Recruiters")
    return addRecruiter.data
  } catch (error) {
    navigate("/Recruiters")
    throw alertExistRecruiter()
  }
}
