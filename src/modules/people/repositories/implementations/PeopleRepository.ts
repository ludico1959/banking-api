import { Person } from '@prisma/client';
import { prisma } from '../../../../database/PrismaService';
import { ICreatePersonDTO, IPeopleRepository } from '../IPeopleRepository';

class PeopleRepository implements IPeopleRepository {
  async create({
    name,
    document,
    password,
    category,
  }: ICreatePersonDTO): Promise<void> {
    await prisma.person.create({
      data: {
        name,
        password,
        document,
        category,
      },
    });
  }

  async list(): Promise<Person[]> {
    const people = await prisma.person.findMany();

    return people;
  }

  async findByDocument(document: string): Promise<Person> {
    const person = await prisma.person.findUnique({
      where: {
        document,
      },
    });

    return person;
  }
}

export { PeopleRepository };
