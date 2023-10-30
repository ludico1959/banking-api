import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateTransactionService } from './CreateTransactionService';

class CreateTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { value, description } = request.body;
    const accountId = request.params.accountId;

    const createTransactionService = container.resolve(
      CreateTransactionService,
    );

    const card = await createTransactionService.execute(accountId, {
      value,
      description,
    });

    return response.status(201).json(card);
  }
}

export { CreateTransactionController };
