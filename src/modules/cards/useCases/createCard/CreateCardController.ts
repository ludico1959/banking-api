import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCardService } from './CreateCardService';

class CreateCardController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cvv, number, type } = request.body;
    const accountId = request.params.accountId;

    const createCardService = container.resolve(CreateCardService);

    const card = await createCardService.execute(accountId, {
      cvv,
      number,
      type,
    });

    return response.status(201).json(card);
  }
}

export { CreateCardController };
