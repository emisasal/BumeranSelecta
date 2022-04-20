import axios from "axios"


//reclutadores por área ordenados por rating
export const getRecruitersPerArea = async ({areaValue, country}) => {
    try {
      const recruitersPerArea = await axios.post(
        "http://localhost:3001/api/reports/recruitersArea", {
            areaValue : areaValue,
            country: country
          }
        
      )
      console.log("Por Area", getRecruitersPerArea)
      return recruitersPerArea.data.slice(0, 10)
    } catch (error) {
      throw error
    }
  }


  //ranking general de reclutadores ordenados por rating
  export const topRecruiters = async () => {
    try {
      const topRecruiters = await axios.get(
        "http://localhost:3001/api/reports/topRecruiters"
      )
      return topRecruiters.data.slice(0, 10)
    } catch (error) {
      throw error
    }
  }


export const getSearchBarService = async () => {
  try {
    const searchBar = await axios.get(
      "http://localhost:3001/api/reports/count_state"
    )
    return searchBar.data
  } catch (error) {
    throw error
  }
}

export const getCountGlobalService = async () => {
  try {
    const searchPolar = await axios.get(
      "http://localhost:3001/api/reports/count_global"
    )
    return searchPolar.data
  } catch (error) {
    throw error
  }
}

export const getCountAssigService = async () => {
  try {
    const countAssig = await axios.get(
      "http://localhost:3001/api/reports/count_assig"
    )
    return countAssig.data
  } catch (error) {
    throw error
  }
}

export const getCountCountryService = async () => {
  try {
    const countCountry = await axios.get(
      "http://localhost:3001/api/reports/count_country"
    )
    return countCountry.data
  } catch (error) {
    throw error
  }
}
  