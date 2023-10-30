import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePersonService } from './CreatePersonService';

class CreatePersonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, document, password } = request.body;
    const createPersonService = container.resolve(CreatePersonService);

    await createPersonService.execute({ name, document, password });

    return response.status(201).json({ message: 'Person created.' });
  }
}

export { CreatePersonController };
