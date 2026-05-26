import express from 'express'
import { router as apiRoutes} from './routes/index.js'
import {connectDB} from './config/mongoDB.js'

const app = express();
const port = 3000

app.use(express.json())

app.use('/api', apiRoutes);


//Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error!",
    path: req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString(),
    stack: err.stack,
  });
});


await connectDB();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})