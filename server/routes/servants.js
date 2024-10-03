import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ServantsController from '../controllers/servants.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', ServantsController.getServants);

router.get('/:servantId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/public/servant.html'));
});

export default router;