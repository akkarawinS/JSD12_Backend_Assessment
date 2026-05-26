import express from 'express'
import { router as apiRoutes} from './routes/products.routes.js'
import {connectDB} from './config/mongoDB.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { logger } from './middlewares/logger.js'

const app = express();
const port = 3000

app.use(express.json())

app.use('/', apiRoutes);


app.use(errorHandler);


await connectDB();


app.listen(process.env.PORT , () => {
  logger.info(`Example app listening on port ${port}`)
})