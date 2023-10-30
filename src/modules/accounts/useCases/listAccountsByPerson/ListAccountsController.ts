import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAccountsService } from './ListAccountsService';

class ListAccountsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const peopleId = request.params.peopleId;

    const listAccountsService = container.resolve(ListAccountsService);

    const all = await listAccountsService.execute(peopleId);

    return response.status(200).json(all);
  }
}

export { ListAccountsController };
