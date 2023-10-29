import { Router } from 'express';
import { PeopleRepository } from '../repositories/PeopleRepository';
import { CreatePersonService } from '../services/CreatePersonService';

const peopleRoutes = Router();
const peopleRepository = new PeopleRepository();

peopleRoutes.post('/', async (request, response) => {
  const { name, document } = request.body;

  const createPersonService = new CreatePersonService(peopleRepository);

  createPersonService.execute({ name, document });

  return response.status(201).json({ name, document });
});

peopleRoutes.get('/', async (request, response) => {
  const people = await peopleRepository.list();

  return response.status(200).json(people);
});

export { peopleRoutes };
