const mysql = require('mysql')
const connection = require('../datastore/db')
const { encrypt, decrypt } = require('../middleware/hash')
const dateFns = require('date-fns')

const getAllPractitioners = body => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Practitioner`,
      [],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log(results)
        resolve(results)
      })
  })
}

const getPractitioner = query => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Practitioner WHERE practitionerId = ?`,
      [query.id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log(results)
        resolve(results)
      })
  })
}

const createPractitioner = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO Practitioner SET`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log(results)
        resolve(results)
      })
  })
}

const updatePractitioner = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${body.userType} SET` +
            'practitionerFirstName ? ' +
            'practitionerLastName ? ' +
            'practitionerSurName ? ' +
            'practitionerSex ? ' +
            'practitionerAge ? ' +
            'practitionerPosition ? ' +
            'practitionerImage ? ' +
            'practitionerHash ? ' +
            'practitionerEmail ? ' +
            'WHERE id = ? ',
      [
        body.practitionerFirstName,
        body.practitionerLastName,
        body.practitionerSurName,
        body.practitionerSex,
        body.practitionerAge,
        body.practitionerPosition,
        body.practitionerImage,
        body.practitionerHash,
        body.practitionerEmail,
        body.id
      ],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log(results)
        resolve(results)
      })
  })
}
// practitioner Buzy Day
const getPractitionerBuzyTime = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM BuzyDay WHERE practitionerId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        results = results.map((day, index) => {
          day.index = index
          // day.date = dateFns.format(day.date, 'DD/MM/YYYY')
          delete day.practitionerId
          return day
        })
        resolve(results)
      })
  })
}
const deletePractitionerBuzyTime = id => {
  return new Promise((resolve, reject) => {
    connection.query('SET FOREIGN_KEY_CHECKS = 0', [], (error) => {
      if (error) {
        throw error
      }
      connection.query(
        `DELETE FROM BuzyDay WHERE dayId = ?`,
        [id],
        (error, results, fields) => {
          connection.query(
            `SET FOREIGN_KEY_CHECKS = 1;`,
            [id],
            (error, results, fields) => {
              if (error) {
                throw error
              }
              resolve()
            })
        })
      })

  })
}

const createPractitionerBuzyTime = (body) => {
  console.log(body)
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO BuzyDay SET ?`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        resolve(results)
      })
  })
}

const updatePractitionerBuzyTime = (body, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE BuzyDay SET ' +
      'date = ?, ' +
      'value = ? ' +
      'WHERE dayId = ?',
      [
        body.date,
        body.value,
        id
      ],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('________________Practitioner_Buzy_Day_UPDATE___________', results)
        resolve(results)
      })
  })
}

// practitioner schedule
const getAllPractitionerSchedule = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Schedule WHERE practitionerId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Practitioner_Schedule____________', results)
        resolve(results)
      })
  })
}

const getPractitionerSchedule = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Schedule WHERE practitionerId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        resolve(results[0])
      })
  })
}

const createPractitionerSchedule = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO Schedule SET`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Create_Practitioner_Schedule___________', results)
        resolve(results)
      })
  })
}

const updatePractitionerSchedule = (body, id) => {
  console.log(body)
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE Schedule SET ' +
      'monday = ?, ' +
      'tuesday = ?, ' +
      'wednesday = ?, ' +
      'thursday = ?, ' +
      'friday = ?, ' +
      'saturday = ?, ' +
      'sunday = ? ' +
      'WHERE scheduleId = ?',
      [
        body.monday,
        body.tuesday,
        body.wednesday,
        body.thursday,
        body.friday,
        body.saturday,
        body.sunday,
        id
      ],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('________________Practitioner_Schedule_UPDATE___________', results)
        resolve(results)
      })
  })
}

// practitioner feedback
const getAllPractitionerFeedback = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM PractitionerFeedback WHERE practitionerId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Practitioner_Feedback____________', results)
        resolve(results)
      })
  })
}

const getPractitionerFeedback = (id, idFeedback) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM PractitionerFeedback WHERE practitionerId = ? AND feedbackId = ?`,
      [id, idFeedback],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________One_Practitioner_Feedback____________', results)
        resolve(results)
      })
  })
}

const createPractitionerFeedback = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO PractitionerFeedback SET`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Create_Practitioner_Feedback___________', results)
        resolve(results)
      })
  })
}

const updatePractitionerFeedback = (body, id, idFeedback) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE PractitionerFeedback SET' +
      'feedback ? ' +
      'WHERE practitionerId = ? AND feedbackId = ?',
      [
        body.feedback,
        id,
        idFeedback
      ],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('________________Practitioner_Feedback_UPDATE___________', results)
        resolve(results)
      })
  })
}

// specialization
const getSpecialization = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Specialization`,
      [],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Specialization____________', results)
        resolve(results)
      })
  })
}
module.exports.getAllPractitioners = getAllPractitioners
module.exports.getPractitioner = getPractitioner
module.exports.createPractitioner = createPractitioner
module.exports.updatePractitioner = updatePractitioner
module.exports.getPractitionerBuzyTime = getPractitionerBuzyTime
module.exports.deletePractitionerBuzyTime = deletePractitionerBuzyTime
module.exports.createPractitionerBuzyTime = createPractitionerBuzyTime
module.exports.updatePractitionerBuzyTime = updatePractitionerBuzyTime
module.exports.getAllPractitionerSchedule = getAllPractitionerSchedule
module.exports.getPractitionerSchedule = getPractitionerSchedule
module.exports.createPractitionerSchedule = createPractitionerSchedule
module.exports.updatePractitionerSchedule = updatePractitionerSchedule
module.exports.getAllPractitionerFeedback = getAllPractitionerFeedback
module.exports.getPractitionerFeedback = getPractitionerFeedback
module.exports.createPractitionerFeedback = createPractitionerFeedback
module.exports.updatePractitionerFeedback = updatePractitionerFeedback
module.exports.getSpecialization = getSpecialization
