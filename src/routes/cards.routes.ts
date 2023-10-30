import { Router } from 'express';
import { CreateCardController } from '../modules/cards/useCases/createCard/CreateCardController';

const cardsRoutes = Router();

const createCardController = new CreateCardController();
// const listCardsController = new ListCardsController();

cardsRoutes.post('/:accountId/cards', createCardController.handle);
// accountsRoutes.get('/:accountId/cards', listCardsController.handle);

export { cardsRoutes };
