import { Person } from '@prisma/client';
import { IPeopleRepository } from '../../repositories/IPeopleRepository';

class ListPeopleService {
  constructor(private peopleRepository: IPeopleRepository) {}

  async execute(): Promise<Person[]> {
    const people = await this.peopleRepository.list();

    return people;
  }
}

export { ListPeopleService };
