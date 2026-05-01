const { Client } = require('pg');

async function testConnection(name, config) {
    const client = new Client(config);
    try {
        await client.connect();
        console.log(`[SUCCESS] ${name}`);
        await client.end();
        return true;
    } catch (err) {
        console.error(`[FAIL] ${name}:`, err.message);
        return false;
    }
}

async function run() {
    const pass = '4R#j8qU&T*&R.dj';

    await testConnection("Pooler Port 6543", {
        host: 'aws-1-ap-south-1.pooler.supabase.com',
        port: 6543,
        user: 'postgres.crmrrikayvkatdvzcumu',
        password: pass,
        database: 'postgres',
        ssl: { rejectUnauthorized: false }
    });

    await testConnection("Pooler Port 5432", {
        host: 'aws-1-ap-south-1.pooler.supabase.com',
        port: 5432,
        user: 'postgres.crmrrikayvkatdvzcumu',
        password: pass,
        database: 'postgres',
        ssl: { rejectUnauthorized: false }
    });

    await testConnection("Direct DB", {
        host: 'db.crmrrikayvkatdvzcumu.supabase.co',
        port: 5432,
        user: 'postgres',
        password: pass,
        database: 'postgres',
        ssl: { rejectUnauthorized: false }
    });
}

run();
