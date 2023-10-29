import { Category } from '@prisma/client';
import { IPeopleRepository } from '../../repositories/IPeopleRepository';

interface IRequest {
  name: string;
  document: string;
}

class CreatePersonService {
  constructor(private peopleRepository: IPeopleRepository) {}

  async execute({ name, document }: IRequest) {
    const personAlreadyExists =
      await this.peopleRepository.findByDocument(document);

    if (personAlreadyExists) {
      throw new Error('Person already exists');
    }

    const category: Category = Category.CPF;

    this.peopleRepository.create({ name, document, category });
  }
}

export { CreatePersonService };
