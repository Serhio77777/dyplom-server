const mysql = require('mysql')
const connection = require('../datastore/db')
const { encrypt, decrypt } = require('../middleware/hash')

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
        console.log('_______________Buzy_Day_Practitioner____________', results)
        resolve(results)
      })
  })
}

const createPractitionerBuzyTime = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO BuzyDay SET`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Create_Practirioner_Buzy_Day___________', results)
        resolve(results)
      })
  })
}

const updatePractitionerBuzyTime = (body, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE BuzyDay SET' +
      'date ? ' +
      'value ? ' +
      body.practitionerId ? 'WHERE practitionerId = ?' : 'WHERE adminId = ?',
      [
        body.date,
        body.value,
        id,
        body.practitionerId ? body.practitionerId : body.adminId
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

const getPractitionerSchedule = (id, idSchedule) => {
  return new Promise((resolve, reject) => {
    connection.query(
      // body.practitionerId ? body.practitionerId : body.adminId
      `SELECT * FROM Schedule WHERE practitionerId = ? AND scheduleId = ?`,
      [id, idSchedule],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________One_Practitioner_Schedule____________', results)
        resolve(results)
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

const updatePractitionerSchedule = (body, id, scheduleId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE Schedule SET' +
      'monday ? ' +
      'tuesday ? ' +
      'wednesday ? ' +
      'thursday ? ' +
      'friday ? ' +
      'saturday ? ' +
      'sunday ? ' +
      'WHERE practitionerId = ? AND scheduleId = ?',
      // body.practitionerId ? 'WHERE practitionerId = ? AND feedbackId = ?' : 'WHERE adminId = ? AND feedbackId = ?',
      [
        body.feedback,
        body.monday,
        body.tuesday,
        body.wednesday,
        body.thursday,
        body.friday,
        body.saturday,
        body.sunday,
        id,
        scheduleId,
        // body.practitionerId ? body.practitionerId : body.adminId
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
