const connection = require('../datastore/db')

const getAllUsers = body => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Patient`,
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

const getUserProfile = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Patient WHERE patientId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log(results)
        resolve(results)
      })
  })
}

const createUserProfile = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO Patient SET`,
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

const updatePatient = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE Patient SET` +
            'patientFirstName ? ' +
            'patientLastName ? ' +
            'patientSurName ? ' +
            'patientSex ? ' +
            'patientAge ? ' +
            'patientPosition ? ' +
            'patientImage ? ' +
            'patientHash ? ' +
            'patientEmail ? ' +
            'WHERE id = ? ',
      [
        body.patientFirstName,
        body.patientLastName,
        body.patientSurName,
        body.patientSex,
        body.patientAge,
        body.patientPosition,
        body.patientImage,
        body.patientHash,
        body.patientEmail,
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
// note
const getAllNotes = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Note WHERE cardId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Notes____________', results)
        resolve(results)
      })
  })
}

const getNote = (id, noteId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Note WHERE cardId = ? AND noteId = ?`,
      [id, noteId],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('______________One_Note____________', results)
        resolve(results)
      })
  })
}

const createNote = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO Note SET`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Create_Note___________', results)
        resolve(results)
      })
  })
}

const updateNote = (body, id, noteId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE Note SET' +
      'noteDescription ? ' +
      'noteDateCreation ? ' +
      'noteDiagnosis ? ' +
      'noteStatus ? ' +
      'WHERE cardId = ? AND noteId = ?',
      [
        body.noteDescription,
        body.noteDateCreation,
        body.noteDiagnosis,
        body.noteStatus,
        id,
        noteId
      ],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('________________Note_UPDATE___________', results)
        resolve(results)
      })
  })
}


module.exports.getAllUsers = getAllUsers
module.exports.getUserProfile = getUserProfile
module.exports.createUserProfile = createUserProfile
module.exports.updatePatient = updatePatient
module.exports.getNote = getNote
module.exports.getNote = getNote
module.exports.createNote = createNote
module.exports.updateNote = updateNote
