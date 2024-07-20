const { default: mongoose } = require("mongoose")
const dbUser = ''


const conn = async () => {
    try{
        const dbConn = await mongoose.connect('mongodb://localhost:27017')
        console.log("Banco conectado!!!")

        return dbConn
    }
     catch(error){
        console.log(error)
    }
}

conn();

module.exports = conn
