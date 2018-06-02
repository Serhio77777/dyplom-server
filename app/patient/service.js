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

module.exports.getAllUsers = getAllUsers
module.exports.getUserProfile = getUserProfile
module.exports.createUserProfile = createUserProfile
module.exports.updatePatient = updatePatient
