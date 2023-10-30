import { Category } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
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
