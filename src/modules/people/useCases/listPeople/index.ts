import { PeopleRepository } from '../../repositories/implementations/PeopleRepository';
import { ListPeopleController } from './ListPeopleController';
import { ListPeopleService } from './ListPeopleService';

const peopleRepository = new PeopleRepository();
const listPeopleService = new ListPeopleService(peopleRepository);
const listPeopleController = new ListPeopleController(listPeopleService);

export { listPeopleController };
