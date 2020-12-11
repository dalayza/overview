import { Router } from 'express';

import {
    createMembro,
    getMembros,
    getMembroById,
    deleteMembroById,
    updateMembroById
} from '../controllers/membro.controller';

const router = Router();

router.get('/', getMembros);

router.post('/', createMembro);

router.get('/:id', getMembroById);

router.delete('/:id', deleteMembroById);

router.put('/:id', updateMembroById);

export default router;