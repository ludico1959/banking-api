import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAccountService } from './CreateAccountService';

class CreateAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { branch, account } = request.body;
    const peopleId = request.params.peopleId;

    const createAccountService = container.resolve(CreateAccountService);

    const createdAccount = await createAccountService.execute(peopleId, {
      branch,
      account,
    });

    return response.status(201).json(createdAccount);
  }
}

export { CreateAccountController };
