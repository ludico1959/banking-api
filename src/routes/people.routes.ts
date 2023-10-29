import { Router } from 'express';
import { PersonRepository } from '../repositories/PeopleRepository';
import { CreatePersonService } from '../services/CreatePersonService';

const peopleRoutes = Router();
const personRepository = new PersonRepository();

peopleRoutes.post('/', async (request, response) => {
  const { name, document } = request.body;

  const createPersonService = new CreatePersonService(personRepository);

  createPersonService.execute({ name, document });

  return response.status(201).json({ name, document });
});

peopleRoutes.get('/', async (request, response) => {
  const people = await personRepository.list();

  return response.status(200).json(people);
});

export { peopleRoutes };
