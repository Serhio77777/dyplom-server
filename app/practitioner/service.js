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

module.exports.getAllPractitioners = getAllPractitioners
module.exports.getPractitioner = getPractitioner
module.exports.createPractitioner = createPractitioner
module.exports.updatePractitioner = updatePractitioner
