const bcrypt = require('bcrypt')

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10) // salt = data acak yang ditambah ke password sebelum proses hash && gensaltSync menghasilkan salt secara sinkron
    const hash = bcrypt.hashSync(password, salt)  // hash = mengubah data asli (seperti password) menjadi string yang tampak acak dan tidak dapat dikembalikan ke bentuk aslinya. 
    return hash
}

const comparePassword = (password, hashpassword) => { // mengecek apakah password yang diinput sama dengan password yang di database ( data nya berbentuk boolean ( true atau false))
    return bcrypt.compareSync(password, hashpassword)
}

module.exports = {hashPassword,comparePassword}