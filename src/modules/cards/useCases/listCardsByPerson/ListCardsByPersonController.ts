import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCardsByPersonService } from './ListCardsByAccountService';

class ListCardsByPersonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { peopleId } = request.params;

    const listCardsByPersonService = container.resolve(
      ListCardsByPersonService,
    );

    const all = await listCardsByPersonService.execute(peopleId);

    return response.status(200).json(all);
  }
}

export { ListCardsByPersonController };
