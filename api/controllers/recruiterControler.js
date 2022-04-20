const { Searchs } = require("../models")
const Recruiter = require("../models/Recruiters")

exports.add = (req, res) => {
  const { name, surname, country, description_rec, area_rec } = req.body
  try {
    Recruiter.findOrCreate({
      where: { name, surname, country },
      defaults: {
        name,
        surname,
        country,
        description_rec,
        area_rec,
      },
    }).then(data => {
      if (data[1]) res.status(201).send(data[0])
      else res.status(400).send(data[1])
    })
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

exports.getAll = (req, res) => {
  const { page } = req.params
  const initialLimit = 20
  const cut = page >= 2 ? initialLimit * page - initialLimit : 0
  const getPagingData = (recruiter, page, limit) => {
    const { count: totalItems, rows: filas } = recruiter;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, filas, totalPages, currentPage };
  }
  try {
    Recruiter.findAndCountAll({
      // include: Searchs,
      order: [["Id", "DESC"]],
      limit: initialLimit,
      offset: cut,
    }).then(data => {
      const response = getPagingData(data, page, initialLimit)
      res.status(200).send(response)
    })
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

exports.getById = (req, res) => {
  const { id } = req.params
  try {
    Recruiter.findOne({ where: { id }, include: Searchs }).then(data =>
      res.status(200).send(data)
    )
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

exports.update = (req, res) => {
  const { id } = req.params
  try {
    Recruiter.update(req.body, {
      where: { id },
      returning: true,
      plain: true,
    }).then(data => res.status(201).send(data))
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

exports.delete = (req, res) => {
  const { id } = req.params
  try {
    Recruiter.destroy({ where: { id } }).then(() => res.sendStatus(202))
  } catch (error) {
    console.log("ERROR: ", error)
  }
}
