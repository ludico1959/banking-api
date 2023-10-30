import { Person } from '@prisma/client';
import { prisma } from '../../../../database/PrismaService';
import { ICreatePersonDTO, IPeopleRepository } from '../IPeopleRepository';
import { PrivatePerson } from '../../types/PrivatePerson';

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

  async list(): Promise<PrivatePerson[]> {
    const people = await prisma.person.findMany({
      select: {
        id: true,
        name: true,
        document: true,
        password: false,
        category: false,
        createdAt: true,
        updatedAt: true,
      },
    });

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
