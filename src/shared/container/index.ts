import { container } from 'tsyringe';
import { IPeopleRepository } from '../../modules/people/repositories/IPeopleRepository';
import { PeopleRepository } from '../../modules/people/repositories/implementations/PeopleRepository';
import { IAccountsRepository } from '../../modules/accounts/repositories/IAccountsRepository';
import { AccountsRepository } from '../../modules/accounts/repositories/implementations/AccountsRepository';
import { ICardsRepository } from '../../modules/cards/repositories/ICardsRepository';
import { CardsRepository } from '../../modules/cards/repositories/implementations/CardsRepository';

container.registerSingleton<IPeopleRepository>(
  'PeopleRepository',
  PeopleRepository,
);

container.registerSingleton<IAccountsRepository>(
  'AccountsRepository',
  AccountsRepository,
);

container.registerSingleton<ICardsRepository>(
  'CardsRepository',
  CardsRepository,
);
