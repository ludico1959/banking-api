import { Category, Person } from '@prisma/client';
import { PrivatePerson } from '../types/PrivatePerson';

interface ICreatePersonDTO {
  name: string;
  document: string;
  password: string;
  category: Category;
}

interface IPeopleRepository {
  findByDocument(document: string): Promise<Person>;
  list(): Promise<PrivatePerson[]>;
  create({
    name,
    document,
    password,
    category,
  }: ICreatePersonDTO): Promise<void>;
}

export { ICreatePersonDTO, IPeopleRepository };
