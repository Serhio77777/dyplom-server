const connection = require('../datastore/db')
const dateFns = require('date-fns')

const getAllUsers = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Patient WHERE practitionerId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        results = results.map((result, index) => {
          result.patientIndex = index + 1
          result.patientDateBorn = dateFns.format(result.patientDateBorn, 'MM/DD/YYYY')
          return result
        })
        resolve(results)
      })
  })
}

const getAllNotes = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT noteDateCreation, noteDescription, noteDiagnosis, noteId, noteStatus, practitionerId FROM Note WHERE cardId = (SELECT cardId FROM Card WHERE patientId = ?)`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        results = results.map((result, index) => {
          result.noteIndex = index + 1
          result.noteDateCreation = dateFns.format(result.noteDateCreation, 'MM/DD/YYYY')
          return result
        })
        resolve(results)
      })
  })
}
const getPratitionerByNote = notes => {
  return new Promise((resolve, reject) => {
    return Promise.all(notes.map(async note => {
      note.practitioner = await getPratitioner(note.practitionerId)
      await delete note.practitionerId
      return note
    })).then(notes => {
      resolve(notes)
    })
  })
}

const deletePatient = id => {
  return new Promise((resolve, reject) => {
    connection.query('SET FOREIGN_KEY_CHECKS = 0', [], (error) => {
      if (error) {
        throw error
      }
      connection.query(
        `DELETE FROM Patient WHERE patientId = ?`,
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

const getPratitioner = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT practitionerFirstName, practitionerLastName, practitionerSurName FROM Practitioner WHERE practitionerId = ?`, 
      [id], 
      (error, results, fields) => {
        if (error) {
            throw error
        }
        resolve(results[0])
    })
})
}
const getAllPatientInfo = patients => {
  return new Promise((resolve, reject) => {
    return Promise.all(patients.map(async patient => {
      patient.notes = await getAllNotes(patient.patientId)
      if (patient.notes.length) {
        patient.notes = await getPratitionerByNote(patient.notes)
      }
      return patient
    })).then(fullPatients => {
      resolve({patients: fullPatients})
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
        return Promise.all(results.map(async patient => {
          patient.notes = await getAllNotes(patient.patientId)
          if (patient.notes.length) {
            patient.notes = await getPratitionerByNote(patient.notes)
          }
          return patient
        })).then(fullPatients => {
          resolve({patient: fullPatients[0]})
        })
      })
  })
}

const createUserProfile = (body) => {
  console.log(body)
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO Patient SET ?`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        connection.query(
          `INSERT INTO Card SET ?`,
          [{patientId: results.insertId}],
          (error, results, fields) => {
            if (error) {
              throw error
            }
            console.log(results, fields)
            resolve(results)
          })
      })
  })
}

const updatePatient = (body, id) => {
  console.log('UPDATE Patient SET ' +
  'patientFirstName = ?, ' +
  'patientLastName = ?, ' +
  'patientSurName = ?, ' +
  'patientSex = ?, ' +
  'patientDateBorn = ?, ' +
  'patientBloodType = ?, ' +
  'patientImage = ?, ' +
  'patientHeight = ?, ' +
  'patientWeight = ?, ' +
  'practitionerId = ? ' +
  'WHERE patientId = ? ')
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE Patient SET ' +
        'patientFirstName = ?, ' +
        'patientLastName = ?, ' +
        'patientSurName = ?, ' +
        'patientSex = ?, ' +
        'patientDateBorn = ?, ' +
        'patientBloodType = ?, ' +
        'patientImage = ?, ' +
        'patientHeight = ?, ' +
        'patientWeight = ?, ' +
        'practitionerId = ? ' +
        'WHERE patientId = ? ',
      [
        body.patientFirstName,
        body.patientLastName,
        body.patientSurName,
        body.patientSex,
        body.patientDateBorn,
        body.patientBloodType,
        body.patientImage,
        body.patientHeight,
        body.patientWeight,
        body.practitionerId,
        id
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
module.exports.getAllPatientInfo = getAllPatientInfo
module.exports.getUserProfile = getUserProfile
module.exports.deletePatient = deletePatient
module.exports.createUserProfile = createUserProfile
module.exports.updatePatient = updatePatient
module.exports.getNote = getNote
module.exports.getNote = getNote
module.exports.createNote = createNote
module.exports.updateNote = updateNote
