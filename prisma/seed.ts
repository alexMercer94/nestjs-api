import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.donation.deleteMany();
  const alice = await prisma.donation.create({
    data: {
      email: 'email@email.com',
      displayName: 'Alex',
      count: 5,
    },
  });

  console.log({ alice });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
