import { Request, Response } from 'express';
import { CreatePersonService } from './CreatePersonService';

class CreatePersonController {
  constructor(private createPersonService: CreatePersonService) {}

  handle(request: Request, response: Response): Response {
    const { name, document } = request.body;

    this.createPersonService.execute({ name, document });

    return response.status(201).json({ name, document });
  }
}

export { CreatePersonController };
