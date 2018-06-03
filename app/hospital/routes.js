const express = require('express')
const router = express.Router()
const hospitalService = require('./service')
const validate = require('../middleware/validate-middleware')
const userValidator = require('./validator')

// hospital requests
router.get('/hospital', (req, res, next) => {
  hospitalService.getAllHospitals()
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.get('/hospital/:id', (req, res, next) => {
  hospitalService.getHospital(req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.post('/hospital', (req, res, next) => {
  hospitalService.createHospital(req.body)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.put('/hospital/:id', (req, res, next) => {
  hospitalService.updateHospital(req.body, req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

// TODO: optimization for requests
// hospital illness
router.get('/hospital/:id/illness', (req, res, next) => {
  hospitalService.getAllHospitalIllness(req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

// router.post('/illness', (req, res, next) => {
//   hospitalService.createHospital(req.body)
//     .then((answer) => {
//       res.json(answer)
//     })
//     .catch(next)
// })

// router.put('/illness/:id', (req, res, next) => {
//   hospitalService.updateHospital(req.body, req.params.id)
//     .then((answer) => {
//       res.json(answer)
//     })
//     .catch(next)
// })

// hospital news
router.get('/hospital/:id/news', (req, res, next) => {
  hospitalService.getAllHospitalNews(req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.get('/hospital/:id/news/:idNews', (req, res, next) => {
  hospitalService.getHospitalNews(req.params.id, req.params.idNews)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.post('/hospital/:id/news', (req, res, next) => {
  hospitalService.createNews(req.body)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.put('/hospital/:id/news/:idNews', (req, res, next) => {
  hospitalService.updateNews(req.body, req.params.id, req.params.idNews)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})
// hospital feedback
router.get('/hospital/:id/feedback', (req, res, next) => {
  hospitalService.getAllHospitalFeedback(req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

// router.get('/hospital/:id/feedback/:idFeedback', (req, res, next) => {
//   hospitalService.getHospitalFeedback(req.body, req.params.id, req.params.idFeedback)
//     .then((answer) => {
//       res.json(answer)
//     })
//     .catch(next)
// })

router.post('/hospital/:id/feedback', (req, res, next) => {
  hospitalService.createHospitalFeedback(req.body)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.put('/hospital/:id/feedback/:idFeedback', (req, res, next) => {
  hospitalService.updateHospitalFeedback(req.body, req.params.id, req.params.idFeedback)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

// hospital contacts
router.get('/hospital/:id/contacts', (req, res, next) => {
  hospitalService.getHospitalContacts(req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.post('/hospital/contacts', (req, res, next) => {
  hospitalService.createHospitalContacts(req.body)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.put('/hospital/:id/contacts', (req, res, next) => {
  hospitalService.updateHospitalContacts(req.body, req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

// hospital department
router.get('/hospital/:id/department', (req, res, next) => {
  hospitalService.getAllHospitalDepartments(req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.get('/hospital/:id/department/:idDepartment', (req, res, next) => {
  hospitalService.getHospitalDepartment(req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.post('/hospital/:id/department', (req, res, next) => {
  hospitalService.createHospitalDepartment(req.body)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.put('/hospital/:id/department/:idDepartment', (req, res, next) => {
  hospitalService.updateHospitalDepartment(req.body, req.params.id, req.params.idDepartment)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

// hospital help
router.get('/hospital/:id/help', (req, res, next) => {
  hospitalService.getAllHospitalHelp(req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.get('/hospital/:id/help/:idHelp', (req, res, next) => {
  hospitalService.getHospitalHelp(req.params.id, req.params.idHelp)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.post('/hospital/help', (req, res, next) => {
  hospitalService.createHospitalHelp(req.body)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.put('/hospital/:id/help/:idHelp', (req, res, next) => {
  hospitalService.updateHospitalHelp(req.body, req.params.id, req.params.idHelp)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

module.exports = router