const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const result = await prisma.product.updateMany({
    where: { isPinned: null },
    data: { isPinned: false }
  })
  console.log(`Updated products with null isPinned status.`)
  
  const products = await prisma.product.findMany()
  console.log('Current Product Status:')
  products.forEach(p => {
    console.log(`- ${p.title}: Pinned=${p.isPinned}, Label="${p.customLabel}"`)
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
