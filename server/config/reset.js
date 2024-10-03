import { pool } from './database.js';
import './dotenv.js';
import servantData from '../data/servants.js';

const createServantsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS servants;

        CREATE TABLE IF NOT EXISTS servants (
            id SERIAL PRIMARY KEY,
            mastername VARCHAR(255) NOT NULL,
            truename VARCHAR(255) NOT NULL,
            class VARCHAR(50) NOT NULL,
            image TEXT NOT NULL,
            description TEXT NOT NULL,
            height VARCHAR(50) NOT NULL,
            weight VARCHAR(50) NOT NULL,
            alignment VARCHAR(50) NOT NULL,
            strength VARCHAR(10) NOT NULL,
            endurance VARCHAR(10) NOT NULL,
            agility VARCHAR(10) NOT NULL,
            mana VARCHAR(10) NOT NULL,
            luck VARCHAR(10) NOT NULL,
            np VARCHAR(10) NOT NULL
        );
    `;

    try {
        await pool.query(createTableQuery);
        console.log('Servants table created successfully.');
    } catch (error) {
        console.error('Error creating servants table:', error);
    }
};

const seedServantsTable = async () => {
    await createServantsTable();

    for (const servant of servantData) {
        const insertQuery = {
            text: 'INSERT INTO servants (mastername, truename, class, image, description, height, weight, alignment, strength, endurance, agility, mana, luck, np) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)',
            values: [
                servant.mastername,
                servant.truename,
                servant.class,
                servant.image,
                servant.description,
                servant.height,
                servant.weight,
                servant.alignment,
                servant.strength,
                servant.endurance,
                servant.agility,
                servant.mana,
                servant.luck,
                servant.np
            ]
        };

        try {
            await pool.query(insertQuery);
            console.log(`✅ ${servant.truename} added successfully`);
        } catch (err) {
            console.error('⚠️ error inserting servant', err);
        }
    }
};

seedServantsTable();