const express = require("express")
const router = express.Router()
const recruiterControler = require("../controllers/recruiterControler")

router.get("/page/:page", recruiterControler.getAll)
router.get("/:id", recruiterControler.getById)
router.put("/:id", recruiterControler.update)
router.delete("/:id", recruiterControler.delete)
router.post("/add", recruiterControler.add)

module.exports = router
