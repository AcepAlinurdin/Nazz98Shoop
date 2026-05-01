const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const products = await prisma.product.findMany()
  console.log('--- DAFTAR STATUS PRODUK ---')
  products.forEach(p => {
    console.log(`Produk: ${p.title}`)
    console.log(`- Pinned: ${p.isPinned}`)
    console.log(`- Label: "${p.customLabel}"`)
    console.log('---------------------------')
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
