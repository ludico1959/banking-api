import { Router } from 'express';
import { CreateCardController } from '../modules/cards/useCases/createCard/CreateCardController';
import { ListCardsByAccountController } from '../modules/cards/useCases/listCardsByAccount/ListCardsByAccountController';
import { ListCardsByPersonController } from '../modules/cards/useCases/listCardsByPerson/ListCardsByPersonController';

const cardsRoutes = Router();

const createCardController = new CreateCardController();
const listCardsByAccountController = new ListCardsByAccountController();
const listCardsByPersonController = new ListCardsByPersonController();

cardsRoutes.post(':accountId/cards', createCardController.handle);
cardsRoutes.get(
  '/accounts/:accountId/cards',
  listCardsByAccountController.handle,
);
cardsRoutes.get('/people/:peopleId/cards', listCardsByPersonController.handle);

export { cardsRoutes };
