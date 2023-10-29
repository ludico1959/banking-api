import { PeopleRepository } from '../../repositories/PeopleRepository';
import { CreatePersonController } from './CreatePersonController';
import { CreatePersonService } from './CreatePersonService';

const peopleRepository = new PeopleRepository();
const createPersonService = new CreatePersonService(peopleRepository);
const createPersonController = new CreatePersonController(createPersonService);

export { createPersonController };
