import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      password: 'passtest',
    },
  })
  const client1 = await prisma.client.upsert({
    where: { email1: 'bob@prisma.io' },
    update: {},
    create: {
      email1: 'bob@prisma.io',
      name: 'Bob',
      address: 'rua 3000',
      city: 'Balneario Camboriu',
      phone1: '41 19832-21938',
      state: 'SC',
      zip: '192-12938-823',
      userOwnerId: user1.id,
    },
  })
  const pool1 = await prisma.pool.upsert({
    where: { id: '64d818cbe642ee1942976b81' },
    update: {},
    create: {
      name: 'Pool1',
      address: 'rua 3000',
      city: 'Balneario Camboriu',
      state: 'SC',
      zip: '192-12938-823',
      userOwnerId: user1.id,
      clientOwnerId: client1.id,
      enterSide: 'north',
      poolType: 'CHLORINE',
      lockerCode: '123123',
      photos: ['asda'],
    },
  })

  const service1 = await prisma.service.upsert({
    where: { id: '64d818cbe642ee1942976b81' },
    update: {},
    create: {
      alcalinity: 0.1,
      chlorine: 0.2,
      chlorineSpent: 0.3,
      cyanAcid: 0.4,
      doneByUser: user1.id,
      ph: 0.5,
      phospatoSpent: 0.6,
      photo: ['photo1'],
      shockSpent: 0.7,
      tabletSpent: 0.8,
      poolId: pool1.id,
    },
  })

  console.log({ user1, client1, pool1, service1 })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
