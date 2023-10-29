import { Router } from 'express';
import { createPersonController } from '../modules/people/useCases/createPerson';
import { listPeopleController } from '../modules/people/useCases/listPeople';

const peopleRoutes = Router();

peopleRoutes.post('/', async (request, response) => {
  return createPersonController.handle(request, response);
});

peopleRoutes.get('/', async (request, response) => {
  return listPeopleController.handle(request, response);
});

export { peopleRoutes };
