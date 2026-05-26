//Centralized error handling middleware
import { logger } from './logger.js'
export const errorHandler = async (err, req, res, next) => {
  logger.error({
    err,
    path: req.originalUrl,
    method: req.method,
  }, 'request failed');

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error!',
  });
}

