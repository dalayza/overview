import { Router } from 'express';

import {
    createTipo,
    getTipos,
    deleteTipoById,
    updateTipoById,
    geTipoByProject
} from '../controllers/tipo.controller';

const router = Router();

router.get('/', getTipos);

router.post('/', createTipo);

router.delete('/:id', deleteTipoById);

router.put('/:id', updateTipoById);

router.get('/membro/:membroid', geTipoByProject);

export default router;