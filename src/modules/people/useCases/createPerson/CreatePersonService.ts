import { Category } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { IPeopleRepository } from '../../repositories/IPeopleRepository';

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
    const personAlreadyExists =
      await this.peopleRepository.findByDocument(document);

    if (personAlreadyExists) {
      throw new Error('Person already exists');
    }

    const category: Category = Category.CPF;

    this.peopleRepository.create({ name, document, password, category });
  }
}

export { CreatePersonService };
