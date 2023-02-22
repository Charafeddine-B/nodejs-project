const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cors = require("cors");
dotenv.config({ path: './backend/config/config.env' })
app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

app.use(cors({
    origin: '*',
    credentials: true
}));
PORT = process.env.PORT
db = process.env.db_con
console.log(db)
mongoose.connect(db, () => console.log('database connected'));

app.listen(PORT, () => {

    console.log(`Server running on ${PORT}`)


})