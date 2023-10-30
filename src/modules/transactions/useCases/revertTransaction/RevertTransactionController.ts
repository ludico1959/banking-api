import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RevertTransactionService } from './RevertTransactionService';

class RevertTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const accountId = request.params.accountId;
    const transactionId = request.params.transactionId;

    const revertTransactionService = container.resolve(
      RevertTransactionService,
    );

    const card = await revertTransactionService.execute(
      accountId,
      transactionId,
      description,
    );
    return response.status(201).json(card);
  }
}

export { RevertTransactionController };
