const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const port = 3000
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json())

//routes
app.get('/', (req,res) => {
  res.send('Task manager App')
})

app.use('/api/v1/tasks', tasks)

const start = async () => {
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`App listening on port ${port}!`));
  } catch (error) {
    console.log(error)
  }
}

start()

