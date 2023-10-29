import { Router } from 'express';
import { peopleRoutes } from './people.routes';

const router = Router();

router.use('/people', peopleRoutes);

export { router };
