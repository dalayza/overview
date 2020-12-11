import Sequelize from 'sequelize';

import { sequelize } from '../database/database';
import Tipo from './Tipos';

const Membro = sequelize.define('membros', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome: {
        type: Sequelize.TEXT
    },
    telefone: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.TEXT
    },
    endereco: {
        type: Sequelize.TEXT
    },
    situacao: {
        type: Sequelize.TEXT
    },
    datahoraactual: {
        type: Sequelize.DATE
    },
    datsahoracriacao: {
        type: Sequelize.DATE
    },
}, {
    timestamps: false
});

Membro.hasMany(Tipo, { foreignKey: 'membroid', sourcekey: 'id' });
Tipo.belongsTo(Membro, { foreignKey: 'membroid', sourcekey: 'id' });

export default Membro;
