import express from 'express'
import { router as apiRoutes} from './routes/index.js'
import {connectDB} from './config/mongoDB.js'
import { mw } from './middlewares/mw.js'

const app = express();
const port = 3000

app.use(express.json())

app.use('/api', apiRoutes);


app.use(mw);


await connectDB();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})