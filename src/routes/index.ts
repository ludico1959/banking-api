import { Router } from 'express';
import { peopleRoutes } from './people.routes';
import { accountsRoutes } from './accounts.routes';
import { cardsRoutes } from './cards.routes';
import { transactionsRoutes } from './transactions.routes';

const router = Router();

router.use('/people', peopleRoutes);
router.use('/people', accountsRoutes);
router.use('/', cardsRoutes);
router.use('/accounts', transactionsRoutes);

export { router };
