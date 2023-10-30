import { Router } from 'express';
import { CreateCardController } from '../modules/cards/useCases/createCard/CreateCardController';
import { ListCardsByAccountController } from '../modules/cards/useCases/listCardsByAccount/ListCardsByAccountController';

const cardsRoutes = Router();

const createCardController = new CreateCardController();
const listCardsByAccountController = new ListCardsByAccountController();

cardsRoutes.post('/:accountId/cards', createCardController.handle);
cardsRoutes.get('/:accountId/cards', listCardsByAccountController.handle);

export { cardsRoutes };
