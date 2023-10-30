import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateTransactionService } from './RevertTransactionService';

class CreateTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const accountId = request.params.accountId;
    const transactionId = request.params.transactionId;

    const createTransactionService = container.resolve(
      CreateTransactionService,
    );

    const card = await createTransactionService.execute(
      accountId,
      transactionId,
      description,
    );
    return response.status(201).json(card);
  }
}

export { CreateTransactionController };
