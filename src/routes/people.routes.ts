import { Router } from 'express';
import { CreatePersonController } from '../modules/people/useCases/createPerson/CreatePersonController';
import { ListPeopleController } from '../modules/people/useCases/listPeople/ListPeopleController';

const peopleRoutes = Router();

const createPersonController = new CreatePersonController();
const listPeopleController = new ListPeopleController();

peopleRoutes.post('/', createPersonController.handle);
peopleRoutes.get('/', listPeopleController.handle);

export { peopleRoutes };
