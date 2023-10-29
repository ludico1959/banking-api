import { Request, Response } from 'express';
import { ListPeopleService } from './ListPeopleService';

class ListPeopleController {
  constructor(private listPeopleService: ListPeopleService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listPeopleService.execute();

    return response.status(200).json(all);
  }
}

export { ListPeopleController };
