import { prisma } from '../database/PrismaService';
import { Category, Person } from '@prisma/client';
import { PersonDTO } from '../dtos/PersonDTO';

class PersonRepository {
  async create({ name, document }: PersonDTO): Promise<void> {
    const person = await prisma.person.create({
      data: {
        name,
        document,
        category: Category.CPF,
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

export { PersonRepository };
