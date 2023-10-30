import { inject, injectable } from 'tsyringe';
import { IPeopleRepository } from '../../repositories/IPeopleRepository';
import { PrivatePerson } from '../../types/PrivatePerson';

@injectable()
class ListPeopleService {
  constructor(
    @inject('PeopleRepository')
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute(): Promise<PrivatePerson[]> {
    const people = await this.peopleRepository.list();

    return people;
  }
}

export { ListPeopleService };
