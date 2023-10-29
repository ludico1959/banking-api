import { IPeopleRepository } from '../repositories/IPeopleRepository';

interface IRequest {
  name: string;
  document: string;
}

class CreatePersonService {
  constructor(private personRepository: IPeopleRepository) {}

  async execute({ name, document }: IRequest) {
    const personAlreadyExists =
      await this.personRepository.findByDocument(document);

    if (personAlreadyExists) {
      throw new Error('Person already exists');
    }

    this.personRepository.create({ name, document });
  }
}

export { CreatePersonService };
