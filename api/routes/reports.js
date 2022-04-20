const express = require('express');
const router = express.Router();
const reportsControler = require('../controllers/reportsControler')


//retornan número con cantidad búsquedas según estado
router.get('/new',reportsControler.new);
router.get('/started',reportsControler.started);
router.get('/presented',reportsControler.presented);
router.get('/revision',reportsControler.revision);
router.get('/closed',reportsControler.closed);

//retorna ranking reclutadores por área
router.post('/recruitersArea', reportsControler.recruitersArea)
router.get('/topRecruiters', reportsControler.topRecruiters)

//graficos
router.get('/count_global', reportsControler.searchState)
router.get('/count_state', reportsControler.countState)
router.get('/count_assig', reportsControler.countAssig)
router.get('/count_country', reportsControler.counCountry)

module.exports = router;