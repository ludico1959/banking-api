import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListTransactionsService } from './ListCardsByAccountService';

class ListTransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { accountId } = request.params;

    const listTransactionsService = container.resolve(ListTransactionsService);

    const all = await listTransactionsService.execute(accountId);

    return response.status(200).json(all);
  }
}

export { ListTransactionsController };
