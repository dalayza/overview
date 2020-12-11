import Membro from '../models/Membros';

export async function getMembros(req, res) {
  const membros = await Membro.findAll();

  try {
    res.json(membros);
  } catch (e) {
    res.status(500).json({
      message: 'Somethin goes wrong!',
      data: {},
    });
  }
}

export async function createMembro(req, res) {
  const { nome, telefone, email, endereco, situacao } = req.body;

  try {
    let newMembro = await Membro.create(
      {
        nome,
        telefone,
        email,
        endereco,
        situacao,
        datahoracriacao: new Date()
      },
      {
        fields: [
          'nome',
          'telefone',
          'email',
          'endereco',
          'situacao',
          'datsahoracriacao'
        ],
      }
    );

    if (newMembro) {
      return res.json({
        message: 'Membro created sucessfully!',
        date: newMembro,
      });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Somethin goes wrong!',
      data: {},
    });
  }
}

export async function getMembroById(req, res) {
  const { id } = req.params;

  try {
    const membro = await Membro.findOne({
      where: {
        id,
      },
    });

    res.json(membro);
  } catch (e) {
    res.status(500).json({
      message: 'Somethin goes wrong!',
      data: {},
    });
  }
}

export async function deleteMembroById(req, res) {
  const { id } = req.params;

  try {
    const deleteRowCount = await Membro.destroy({
      where: {
        id,
      },
    });

    res.json({
      message: 'Membro Deleted Sucessfully!',
      count: deleteRowCount,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Somethin goes wrong!',
      data: {},
    });
  }
}

export async function updateMembroById(req, res) {
  const { id } = req.params;
  const { name, priority, description, deliverydate } = req.body;

  try {
    const membros = await Membro.findAll({
      attributes: [
        'id',
        'nome',
        'telefone',
        'email',
        'endereco',
        'situacao',
        'datahoraactual'
      ],
      where: {
        id,
      },
    });

    if (membros.length > 0) {
      membros.forEach(async (membro) => {
        await membro.update({
          name,
          priority,
          description,
          deliverydate,
        });
      });
    }

    return res.json({
      message: 'Membro Updated Sucessfully!',
      data: membros,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Somethin goes wrong!',
      data: {},
    });
  }
}
