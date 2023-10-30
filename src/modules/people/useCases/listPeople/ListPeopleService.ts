import { inject, injectable } from 'tsyringe';
import { IPeopleRepository } from '../../repositories/IPeopleRepository';
import { PrivatePerson } from '../../types/PrivatePerson';
import { AppError } from '../../../../errors/AppError';

@injectable()
class ListPeopleService {
  constructor(
    @inject('PeopleRepository')
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute(): Promise<PrivatePerson[]> {
    const people = await this.peopleRepository.list();

    if (people.length === 0) throw new AppError('Accounts not found.', 404);

    return people;
  }
}

export { ListPeopleService };
