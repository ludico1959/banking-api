import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetBalanceService } from './GetBalanceService';

class GetBalanceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const accountId = request.params.accountId;

    const getBalanceService = container.resolve(GetBalanceService);

    const all = await getBalanceService.execute(accountId);

    return response.status(200).json(all);
  }
}

export { GetBalanceController };
