import { Router } from 'express';
import { PersonRepository } from '../repositories/PeopleRepository';

const peopleRoutes = Router();
const personRepository = new PersonRepository();

peopleRoutes.post('/', (request, response) => {
  const { name, document } = request.body;
  personRepository.create({ name, document });

  return response.status(201).json({ name, document });
});

export { peopleRoutes };
