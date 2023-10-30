import { Person } from '@prisma/client';
import { IPeopleRepository } from '../../repositories/IPeopleRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListPeopleService {
  constructor(
    @inject('PeopleRepository')
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute(): Promise<Person[]> {
    const people = await this.peopleRepository.list();

    return people;
  }
}

export { ListPeopleService };
