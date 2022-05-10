import axios from "axios"

export const deleteSearchServices = async id => {
  try {
    const deleteSearch = await axios.delete(
      `http://localhost:3001/api/search/${id}`
    )
    return deleteSearch.data
  } catch (error) {
    throw error
  }
}

export const addSearchServices = async ({
  description_search,
  country,
  area_search,
  position,
  vacancies,
  lapse_search,
}) => {
  console.log("ESTA ES LA DATA QUE LLEGA AL SERVICE", {
    description_search: description_search,
    country: country,
    area_search: area_search,
    position: position,
    vacancies: vacancies,
    lapse_search: lapse_search,
  })
  try {
    const addSearch = await axios.post("http://localhost:3001/api/search/add", {
      description_search: description_search,
      country: country,
      area_search: area_search,
      position: position,
      vacancies: vacancies,
      lapse_search: lapse_search,
    })
    return addSearch.data
  } catch (error) {
    throw error
  }
}

export const singleSearchServices = async id => {
  try {
    const allSearch = await axios.get(`http://localhost:3001/api/search/${id}`)
    return allSearch.data
  } catch (error) {
    throw error
  }
}

export const editSearchServices = async ({
  id,
  description_search,
  country,
  area_search,
  position,
  vacancies,
  lapse_search,
  recruiterId,
  start_date,
  state_search,
}) => {
  try {
    const editSearch = await axios.put(
      `http://localhost:3001/api/search/${id}`,
      {
        description_search: description_search,
        country: country,
        area_search: area_search,
        position: position,
        vacancies: vacancies,
        lapse_search: lapse_search,
        recruiterId: recruiterId,
        start_date: start_date,
        state_search: state_search,
      }
    )
    return editSearch.data
  } catch (error) {
    throw error
  }
}

export const getSearchsListService = async ({
  page,
  state,
  country,
  filter_start,
  filter_end,
}) => {
  try {
    const pendingSearchs = await axios.post(
      `http://localhost:3001/api/search/list`,
      {
        page: page,
        state: state,
        country: country,
        filter_start: filter_start,
        filter_end: filter_end,
      }
    )
    return pendingSearchs.data
  } catch (error) {
    throw error
  }
}

export const assignmentSearchsServices = async ({ country, area_search }) => {
  try {
    const assignment = await axios.post(
      "http://localhost:3001/api/search/assignment",
      {
        country: country,
        area_search: area_search,
      }
    )
    return assignment.data
  } catch (error) {
    throw error
  }
}

export const endSearchSearchServices = async ({
  id,
  end_date,
  rating,
  recruiterId,
  commentary,
}) => {
  try {
    const endSearch = await axios.put(
      `http://localhost:3001/api/search/end-search/${id}`,
      {
        id: id,
        end_date: end_date,
        rating: rating,
        recruiterId: recruiterId,
        commentary: commentary,
      }
    )
    return endSearch.data
  } catch (error) {
    throw error
  }
}

export const deleteRecruiterSearchServices = async id => {
  try {
    axios.get(`http://localhost:3001/api/search/delete-rec/${id}`)
  } catch (error) {
    throw error
  }
}
