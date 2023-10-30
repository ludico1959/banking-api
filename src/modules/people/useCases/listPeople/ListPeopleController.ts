import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListPeopleService } from './ListPeopleService';

class ListPeopleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { take, page } = request.params;

    const listPeopleService = container.resolve(ListPeopleService);

    const all = await listPeopleService.execute();

    return response.status(200).json(all);
  }
}

export { ListPeopleController };
