import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import servantData from '../data/servants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(servantData);
});

router.get('/:servantId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/servant.html'));
});

export default router;