const connection = require('../datastore/db')

const getAllHospitals = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Hospital`,
      [],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('________________Hospital____________', results)
        resolve(results)
      })
  })
}

const getHospital = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Hospital, Patient WHERE hospitalId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('________________Hospital_One____________',results)
        resolve(results)
      })
  })
}

const createHospital = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO Hospital SET`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Create_Hospital____________', results)
        resolve(results)
      })
  })
}

const updateHospital = (body, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE Hospital SET` +
            'hospitalDescrition ? ' +
            'hospitalName ? ' +
            'hospitalLogo ? ' +
            'hospitalAddress ? ' +
            'adminId ? ' +
            'WHERE hospitalId = ? ',
      [
        body.hospitalDescrition,
        body.hospitalName,
        body.hospitalLogo,
        body.hospitalAddress,
        body.adminId,
        id
      ],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('________________Hospital_UPDATE___________', results)
        resolve(results)
      })
  })
}

const getAllHospitalIllness = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Illness WHERE hospitalId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Illness_Hospital____________', results)
        resolve(results)
      })
  })
}

const getAllHospitalNews = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM News WHERE hospitalId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('______________All_News_Hospital____________', results)
        resolve(results)
      })
  })
}

const getHospitalNews = (id, idNews) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM News WHERE hospitalId = ? AND newsId = ?`,
      [id, idNews],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________News_Hospital____________', results)
        resolve(results)
      })
  })
}

const createNews = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO News SET`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Create_Hospital_News___________', results)
        resolve(results)
      })
  })
}

const updateNews = (body, id, idNews) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE News SET' +
      'newsTitle ? ' +
      'newsDescrition ? ' +
      'newsDate ? ' +
      'newsCategory ? ' +
      'newsImage ? ' +
      'WHERE hospitalId = ? AND newsId = ?',
      [
        body.newsTitle,
        body.newsDescrition,
        body.newsDate,
        body.newsCategory,
        body.newsImage,
        id,
        idNews
      ],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('________________News_UPDATE___________', results)
        resolve(results)
      })
  })
}
// hospital feedback
const getAllHospitalFeedback = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM HospitalFeedback WHERE hospitalId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Feedback_Hospital____________', results)
        resolve(results)
      })
  })
}

const getHospitalFeedback = (id, idFeedback) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM HospitalFeedback WHERE hospitalId = ? AND feedbackId = ?`,
      [id, idFeedback],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________One_Feedback_Hospital____________', results)
        resolve(results)
      })
  })
}

const createHospitalFeedback = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO HospitalFeedback SET`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Create_Hospital_Feedback___________', results)
        resolve(results)
      })
  })
}

const updateHospitalFeedback = (body, id, idFeedback) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE HospitalFeedback SET' +
      'feedback ? ' +
      'WHERE hospitalId = ? AND feedbackId = ?',
      [
        body.feedback,
        id,
        idFeedback
      ],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('________________Hospital_Feedback_UPDATE___________', results)
        resolve(results)
      })
  })
}
// hospital contacts
const getHospitalContacts = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Contact WHERE hospitalId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Contacts_Hospital____________', results)
        resolve(results)
      })
  })
}

const createHospitalContacts = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO Contact SET`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Create_Hospital_Contact___________', results)
        resolve(results)
      })
  })
}

const updateHospitalContacts = (body, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE Contact SET' +
      'contactPhone ? ' +
      'WHERE hospitalId = ?',
      [
        body.feedback,
        id
      ],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('________________Hospital_Contact_UPDATE___________', results)
        resolve(results)
      })
  })
}

const getAllHospitalDepartments = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Department WHERE hospitalId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('______________All_Hospital_Department_Hospital____________', results)
        resolve(results)
      })
  })
}

const getHospitalDepartment = (id, idDepartment) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Department WHERE hospitalId = ? AND departmentId = ?`,
      [id, idDepartment],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Hospital_Department_Hospital____________', results)
        resolve(results)
      })
  })
}

const createHospitalDepartment = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO Department SET`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Create_Hospital_Hospital_Department___________', results)
        resolve(results)
      })
  })
}

const updateHospitalDepartment = (body, id, idDepartment) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE Department SET' +
      'departmentTitle ? ' +
      'departmentQuantity ? ' +
      'departmentDescrition ? ' +
      'WHERE hospitalId = ? AND departmentId = ?',
      [
        body.departmentTitle,
        body.departmentQuantity,
        body.departmentDescrition,
        id,
        idDepartment
      ],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('________________Hospital_Department_UPDATE___________', results)
        resolve(results)
      })
  })
}
// hospital help
const getAllHospitalHelp = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Help WHERE hospitalId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Help_Hospital____________', results)
        resolve(results)
      })
  })
}

const getHospitalHelp = (id, helpId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Help WHERE hospitalId = ? AND helpId = ?`,
      [id, helpId],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('______________One_Help_Hospital____________', results)
        resolve(results)
      })
  })
}

const createHospitalHelp = (body) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO Help SET`,
      [body],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('_______________Create_Hospital_Help___________', results)
        resolve(results)
      })
  })
}

const updateHospitalHelp = (body, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE Help SET' +
      'helpType ? ' +
      'helpTime ? ' +
      'helpPrice ? ' +
      'helpDate ? ' +
      'departamentId ? ' +
      'WHERE hospitalId = ?',
      [
        body.helpType,
        body.helpTime,
        body.helpPrice,
        body.helpDate,
        body.departamentId,
        id
      ],
      (error, results, fields) => {
        if (error) {
          throw error
        }
        console.log('________________Hospital_Help_UPDATE___________', results)
        resolve(results)
      })
  })
}

module.exports.getAllHospitals = getAllHospitals
module.exports.getHospital = getHospital
module.exports.createHospital = createHospital
module.exports.updateHospital = updateHospital
module.exports.getAllHospitalIllness = getAllHospitalIllness
module.exports.getAllHospitalNews = getAllHospitalNews
module.exports.getHospitalNews = getHospitalNews
module.exports.createNews = createNews
module.exports.updateNews = updateNews
module.exports.getAllHospitalFeedback = getAllHospitalFeedback
module.exports.getHospitalFeedback = getHospitalFeedback
module.exports.createHospitalFeedback = createHospitalFeedback
module.exports.updateHospitalFeedback = updateHospitalFeedback
module.exports.getHospitalContacts = getHospitalContacts
module.exports.createHospitalContacts = createHospitalContacts
module.exports.updateHospitalContacts = updateHospitalContacts
module.exports.getAllHospitalDepartments = getAllHospitalDepartments
module.exports.getHospitalDepartment = getHospitalDepartment
module.exports.createHospitalDepartment = createHospitalDepartment
module.exports.updateHospitalDepartment = updateHospitalDepartment
module.exports.getAllHospitalHelp = getAllHospitalHelp
module.exports.getHospitalHelp = getHospitalHelp
module.exports.createHospitalHelp = createHospitalHelp
module.exports.updateHospitalHelp = updateHospitalHelp
