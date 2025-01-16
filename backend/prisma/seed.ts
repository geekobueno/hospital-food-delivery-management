import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  await prisma.user.create({
    data: {
      email: 'geeklove2222@gmail.com',
      username: 'geeko',
      password: 'testpass',
      role: 'ADMIN',
    },
  });

  const allUsers = await prisma.user.findMany();
  console.dir(allUsers, { depth: Infinity });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
