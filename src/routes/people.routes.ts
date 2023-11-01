import { Router } from 'express';
import { ListPeopleController } from '../app/modules/people/useCases/listPeople/ListPeopleController';
import { CreatePersonController } from '../app/modules/people/useCases/createPerson/CreatePersonController';

const peopleRoutes = Router();

const createPersonController = new CreatePersonController();
const listPeopleController = new ListPeopleController();

peopleRoutes.post('/', createPersonController.handle);
peopleRoutes.get('/', listPeopleController.handle);

export { peopleRoutes };
