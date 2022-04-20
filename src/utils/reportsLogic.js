export const LogicSearch = (dataGraphics) => {
    let data = []
    dataGraphics.map((obj) => {
        let state = false
        let states = obj.state_search
        let element = true
        data.map((elem, i) => { if (elem.area_search == obj.area_search) { state = i } })
        if (state||(state===0)) data[state].state_search[states] = obj.count
        else {
            element = data.push({ area_search: obj.area_search, state_search: {} })
            data[element - 1].state_search[states] = obj.count
        }

        if ((!data[element - 1].state_search.Cerrada) && element) data[element - 1].state_search.Cerrada = 0
        if ((!data[element - 1].state_search.Nueva) && element) data[element - 1].state_search.Nueva = 0
        if ((!data[element - 1].state_search.Iniciada) && element) data[element - 1].state_search.Iniciada = 0
    })
    return data
}

export const LogicRecruiter = (dataGraphics) => {
    let data = []
    let arr = [0, 1, 2, 3]
    arr.map((i) => {
        dataGraphics.map((obj) => { if (obj.active_searchs == i) data[i] = obj })
        if (!data[i]) data[i] = { active_search: 0, count: 0 }
    })
    return data
}