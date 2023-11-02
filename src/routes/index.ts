import { Router } from 'express';
import { peopleRoutes } from './people.routes';
import { accountsRoutes } from './accounts.routes';

const router = Router();

router.use(`/people`, peopleRoutes);
router.use('/accounts', accountsRoutes);

export { router };
