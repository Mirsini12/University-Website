const express= require("express");
const connection = require('./connection.js');
const journalRoutes=require('./routes/journals.js')
const vacancyRoutes=require('./routes/vacancies.js')
const applicationRoutes=require('./routes/applications.js')
const adminRoutes=require('./routes/admins.js')
const cors = require("cors");

const Port = process.env.PORT || 8000;


const app = express();
app.use(express.json());
app.use(cors());

app.use('/journals',journalRoutes)
app.use('/users',adminRoutes)
app.use('/vacancies',vacancyRoutes)
app.use('/applications',applicationRoutes)



app.listen(Port, () => {
    console.log(`Server is listening on port ${Port}`);
  });
