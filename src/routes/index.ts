import { Router } from 'express';
import { peopleRoutes } from './people.routes';
import { accountsRoutes } from './accounts.routes';
import { cardsRoutes } from './cards.routes';

const router = Router();

router.use('/people', peopleRoutes);
router.use('/people', accountsRoutes);
router.use('/', cardsRoutes);

export { router };
