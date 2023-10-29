import { Router } from 'express';
import { PeopleRepository } from '../modules/people/repositories/PeopleRepository';
import { createPersonController } from '../modules/people/useCases/createPerson';

const peopleRoutes = Router();
const peopleRepository = new PeopleRepository();

peopleRoutes.post('/', async (request, response) => {
  return createPersonController.handle(request, response);
});

peopleRoutes.get('/', async (request, response) => {
  const people = await peopleRepository.list();

  return response.status(200).json(people);
});

export { peopleRoutes };
