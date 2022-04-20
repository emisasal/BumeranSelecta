const User = require("../models/Users")

exports.register = (req, res) => {
  const { firstName, surname, age, country, email, password } = req.body
  try {
    User.findOrCreate({
      where: { email },
      defaults: {
        firstName,
        surname,
        age,
        country,
        email,
        password,
      },
    }).then(data => {
      if (data[1]) res.status(201).send(data[0])
      else res.status(400).send(data[1])
    })
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

exports.login = (req, res) => {
  try {
    res.send(req.user)
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

exports.logout = (req, res) => {
  try {
    req.logOut()
    res.sendStatus(200)
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

exports.find = async (req, res) => {
  const { email } = req.params
  try {
    const findUser = await User.findOne({
      where: { email },
    })
    if (!findUser)
      return res
        .status(404)
        .send(console.log("=== ERROR ==> El usuario no existe."))
    res.status(200).send(findUser)
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

exports.delete = async (req, res) => {
  const { id } = req.params
  try {
    User.destroy({ where: { id } }).then(() => res.sendStatus(202))
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

