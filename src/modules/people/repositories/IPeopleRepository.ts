import { Category, Person } from '@prisma/client';

interface ICreatePersonDTO {
  name: string;
  document: string;
  password: string;
  category: Category;
}

interface IPeopleRepository {
  findByDocument(document: string): Promise<Person>;
  list(): Promise<Person[]>;
  create({
    name,
    document,
    password,
    category,
  }: ICreatePersonDTO): Promise<void>;
}

export { ICreatePersonDTO, IPeopleRepository };
