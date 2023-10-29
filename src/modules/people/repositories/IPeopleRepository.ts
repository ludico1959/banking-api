import { Category, Person } from '@prisma/client';

interface ICreatePersonDTO {
  name: string;
  document: string;
  category: Category;
}

interface IPeopleRepository {
  findByDocument(document: string): Promise<Person>;
  list(): Promise<Person[]>;
  create({ name, document }: ICreatePersonDTO): Promise<void>;
}

export { ICreatePersonDTO, IPeopleRepository };
