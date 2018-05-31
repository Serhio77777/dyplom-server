const mysql = require('mysql')
const connection = require('../datastore/db')
const { encrypt, decrypt } = require('../middleware/hash')

const getAllUsers = body => {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM ${body.userType}`, 
            [encrypt(`${body.firstName}${body.lastName}${body.surName}${body.password}`)], 
            (error, results, fields) => {
                if (error) {
                    throw error
                }
                console.log(results)
                resolve(results)
        })
    })
}

const getUserProfile = body => {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM ${body.userType} WHERE adminHash = ?`, 
            [encrypt(`${body.firstName}${body.lastName}${body.surName}${body.password}`)], 
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
    body.adminHash = encrypt(`${body.firstName}${body.lastName}${body.surName}${body.password}`)
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO ${body.userType} SET`, 
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

const updateUserProfile = (body) => {
    body.adminHash = encrypt(`${body.firstName}${body.lastName}${body.surName}${body.password}`)
    return new Promise((resolve, reject) => {
        connection.query(
            `UPDATE ${body.userType} SET` +
            'adminFirstName ? ' +
            'adminLastName ? ' +
            'adminSurName ? ' +
            'adminSex ? ' +
            'adminAge ? ' +
            'adminPosition ? ' +
            'adminImage ? ' +
            'adminHash ? ' +
            'adminEmail ? ' +
            'WHERE id = ? ',
            [
                body.adminFirstName,
                body.adminLastName,
                body.adminSurName,
                body.adminSex,
                body.adminAge,
                body.adminPosition,
                body.adminImage,
                body.adminHash,
                body.adminEmail,
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