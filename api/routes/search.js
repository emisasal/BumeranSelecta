const express = require("express")
const router = express.Router()
const searchControler = require("../controllers/searchControlers")

router.post("/add", searchControler.add)
router.delete("/:id", searchControler.delete)
router.get("/:id", searchControler.getId)
router.put("/:id", searchControler.editSearch)
router.post("/assignment", searchControler.assignment)
router.put("/end-search/:id", searchControler.endSearch)
router.get("/delete-rec/:id", searchControler.unassign)
//filtrar por estado y país
router.post("/list", searchControler.getList)

module.exports = router
