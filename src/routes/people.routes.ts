import { Router } from 'express';
import { ListPeopleController } from '../app/modules/people/useCases/listPeople/ListPeopleController';
import { CreatePersonController } from '../app/modules/people/useCases/createPerson/CreatePersonController';
import { CreateAccountController } from '../app/modules/accounts/useCases/createAccount/CreateAccountController';
import { ListAccountsController } from '../app/modules/accounts/useCases/listAccountsByPerson/ListAccountsController';
import { ListCardsByPersonController } from '../app/modules/cards/useCases/listCardsByPerson/ListCardsByPersonController';

const peopleRoutes = Router();

const createPersonController = new CreatePersonController();
const listPeopleController = new ListPeopleController();
const createAccountController = new CreateAccountController();
const listAccountsController = new ListAccountsController();
const listCardsByPersonController = new ListCardsByPersonController();

peopleRoutes.get('/', listPeopleController.handle);
peopleRoutes.post('/', createPersonController.handle);
peopleRoutes.get('/:peopleId/accounts', listAccountsController.handle);
peopleRoutes.post('/:peopleId/accounts', createAccountController.handle);
peopleRoutes.get('/:peopleId/cards', listCardsByPersonController.handle);

export { peopleRoutes };
