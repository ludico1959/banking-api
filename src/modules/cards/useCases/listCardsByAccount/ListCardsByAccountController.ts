import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCardsByAccountService } from './ListCardsByAccountService';

class ListCardsByAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { accountId } = request.params;

    const listCardsByAccountService = container.resolve(
      ListCardsByAccountService,
    );

    const all = await listCardsByAccountService.execute(accountId);

    return response.status(200).json(all);
  }
}

export { ListCardsByAccountController };
