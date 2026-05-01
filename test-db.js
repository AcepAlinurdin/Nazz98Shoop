const { Client } = require('pg');

const client = new Client({
    host: 'aws-1-ap-south-1.pooler.supabase.com',
    port: 5432,
    user: 'postgres.crmrrikayvkatdvzcumu',
    password: '4R#j8qU&T*&R.dj',
    database: 'postgres',
    ssl: { rejectUnauthorized: false }
});

client.connect()
    .then(() => {
        console.log("Connected to pooler!");
        process.exit(0);
    })
    .catch(err => {
        console.error("Pooler error:", err.message);
    });

const directClient = new Client({
    host: 'db.crmrrikayvkatdvzcumu.supabase.co',
    port: 5432,
    user: 'postgres',
    password: '4R#j8qU&T*&R.dj',
    database: 'postgres',
    ssl: { rejectUnauthorized: false }
});

directClient.connect()
    .then(() => {
        console.log("Connected to direct DB!");
        process.exit(0);
    })
    .catch(err => {
        console.error("Direct error:", err.message);
    });
