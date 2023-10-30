import { Category } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
import { IPeopleRepository } from '../../repositories/IPeopleRepository';
import { AppError } from '../../../../errors/AppError';
import { validateCPF } from '../../../../utils/validatorCPF';
import { validateCNPJ } from '../../../../utils/validatorCNPJ';

interface IRequest {
  name: string;
  document: string;
  password: string;
}

@injectable()
class CreatePersonService {
  constructor(
    @inject('PeopleRepository')
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute({ name, document, password }: IRequest) {
    let category: Category;
    if (validateCPF(document)) category = Category.CPF;
    else if (validateCNPJ(document)) category = Category.CNPJ;
    else throw new AppError('Invalid document.');

    const personAlreadyExists =
      await this.peopleRepository.findByDocument(document);

    if (personAlreadyExists) {
      throw new AppError('Person already exists.');
    }

    const passwordHash = await hash(password, 8);

    this.peopleRepository.create({
      name,
      document,
      password: passwordHash,
      category,
    });
  }
}

export { CreatePersonService };
