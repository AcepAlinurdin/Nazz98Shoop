const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const admin = await prisma.admin.findFirst();
    if (admin) {
        console.log('Found admin:', admin.email);
        if (!admin.password.startsWith('$2a$')) {
            console.log('Password is not hashed. Hashing now...');
            const hashedPassword = await bcrypt.hash(admin.password, 10);
            await prisma.admin.update({
                where: { id: admin.id },
                data: { password: hashedPassword }
            });
            console.log('Password hashed successfully.');
        } else {
            console.log('Password is already hashed.');
        }
    } else {
        console.log('No admin found. Creating default admin...');
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await prisma.admin.create({
            data: {
                email: 'admin@example.com',
                password: hashedPassword
            }
        });
        console.log('Default admin created: admin@example.com / admin123');
    }
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
