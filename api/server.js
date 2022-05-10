const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config()

const routes = require("./routes")
const db = require("./config/db")

const User = require("./models/Users")
require("./config/associations")

const { SESSION_SECRET, SERVER_PORT } = process.env

const cookieParser = require("cookie-parser")
const sessions = require("express-session")
const passport = require("passport")
const localStrategy = require("passport-local").Strategy

app.use(express.json())
app.use(morgan("tiny"))
app.use(cookieParser())
app.use(cors())

app.use(
  sessions({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { _expires: 60000000000000 },
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then(user => {
          if (!user) {
            return done(null, false)
          }
          user.hash(password, user.salt).then(hash => {
            if (hash !== user.password) {
              return done(null, false)
            }
            return done(null, user)
          })
        })
        .catch(done)
    }
  )
)

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then(user => {
      done(null, user)
    })
    .catch(done)
})

app.use(function (err, req, res, next) {
  console.error(err)
  res.status(500).send(err)
})

app.use("/api", routes)

db.sync({ force: false }).then(() => {
  app.listen(SERVER_PORT, function () {
    console.log(`Listening on port http://localhost:${SERVER_PORT}`)
  })
})
