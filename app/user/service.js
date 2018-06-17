const mysql = require('mysql')
const connection = require('../datastore/db')
const { encrypt, decrypt } = require('../middleware/hash')

const getAllUsers = body => {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM Practitioner`, 
            [], 
            (error, results, fields) => {
                if (error) {
                    throw error
                }
                resolve(results)
        })
    })
}

const getUserProfile = body => {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM Practitioner WHERE practitionerHash = ?`, 
            [encrypt(`${body.practitionerFirstName}${body.practitionerSurName}${body.password}`)], 
            (error, results, fields) => {
                if (error) {
                    throw error
                }
                resolve(results[0])
        })
    })
}

const createUserProfile = (body) => {
    body.practitionerHash = encrypt(`${body.practitionerFirstName}${body.practitionerSurName}${body.password}`)
    console.log(body)
    return new Promise((resolve, reject) => {
        connection.query(
            // `INSERT INTO Practitioner (practitionerFirstName, practitionerLastName, practitionerSurName, practitionerSex, practitionerDateBirth, practitionerPosition, practitionerImage, practitionerEmail, password, practitionerHash) VALUES ?`, 
            `INSERT INTO Practitioner SET ?`, 
            [body], 
            (error, results, fields) => {
                if (error) {
                    throw error
                }
                resolve(results)
        })
    })
}

const updateUserProfile = (body) => {
    body.practitionerHash = encrypt(`${body.practitionerFirstName}${body.practitionerSurName}${body.password}`)
    return new Promise((resolve, reject) => {
        connection.query(
            'UPDATE ${body.userType} SET' +
            'practitionerFirstName ? ' +
            'practitionerLastName ? ' +
            'practitionerSurName ? ' +
            'practitionerSex ? ' +
            'practitionerDateBirth ? ' +
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
                body.practitionerDateBirth,
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

module.exports.getAllUsers = getAllUsers
module.exports.getUserProfile = getUserProfile
module.exports.createUserProfile = createUserProfile
module.exports.updateUserProfile = updateUserProfile