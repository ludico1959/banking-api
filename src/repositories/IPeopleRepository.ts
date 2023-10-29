import { Person } from '@prisma/client';

interface ICreatePersonDTO {
  name: string;
  document: string;
}

interface IPeopleRepository {
  findByDocument(document: string): Promise<Person>;
  list(): Promise<Person[]>;
  create({ name, document }: ICreatePersonDTO): Promise<void>;
}

export { ICreatePersonDTO, IPeopleRepository };
