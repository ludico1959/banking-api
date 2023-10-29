import { prisma } from '../database/PrismaService';
import { Category } from '@prisma/client';
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
}

export { PersonRepository };
