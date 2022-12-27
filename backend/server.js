const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config({ path: './backend/config/config.env' })

PORT = process.env.PORT
db = process.env.db_con
console.log(db)
mongoose.connect(db, ()=> console.log('database connected'));

app.listen(PORT, () => {

    console.log(`Server running on ${PORT}`)


})