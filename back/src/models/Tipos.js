import Sequelize from 'sequelize';

import { sequelize } from '../database/database';

const Tipos = sequelize.define('tipos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.TEXT
    },
    situacao: {
        type: Sequelize.TEXT
    },
    datahoraactual: {
        type: Sequelize.DATE
    },
    datahoracriacao: {
        type: Sequelize.DATE
    },
    membroid: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Tipos;
