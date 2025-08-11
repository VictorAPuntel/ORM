import { prisma } from '@/prisma'

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: 'Mayk Brito',
        email: 'teste2@teste2.com',
      },
      {
        name: 'Miguel',
        email: 'migueles@teste.com',
      },
    ],
  })
}

seed().then(() => {
  console.log('Datrabase seeded')
  prisma.$disconnect()
})
