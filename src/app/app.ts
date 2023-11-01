import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import './shared/container';
import { router } from '../routes';
import { AppError } from './errors/AppError';

class AppController {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());

    this.server.use(
      (
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction,
      ) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json({
            message: err.message,
          });
        }

        return response.status(500).json({
          status: 'error',
          message: `Internal server error - ${err.message}`,
        });
      },
    );
  }

  routes() {
    this.server.use(router);
  }
}

export default new AppController().server;
