const crypto = require('crypto')
const algorithm = 'aes-256-ctr'
const password = 'd6F3Efeq'

const encrypt = text => {
  const cipher = crypto.createCipher(algorithm, password)
  const crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
const decrypt = text => {
  const decipher = crypto.createDecipher(algorithm,password)
  const dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

module.exports = {
    encrypt: encrypt,
    decrypt: decrypt
}