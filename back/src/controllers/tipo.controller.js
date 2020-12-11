import Tipo from "../models/Tipos";

export async function getTipos(req, res) {
  const tipos = await Tipo.findAll();

  try {
    res.json(tipos);
  } catch (e) {
    res.status(500).json({
      message: 'Somethin goes wrong!',
      data: {},
    });
  }
}

export async function createTipo(req, res) {
  const { descricao, situacao, membroid } = req.body;

  const newTipo = await Tipo.create(
    {
      descricao,
      situacao,
      membroid,
      datahoracriacao: new Date,
    },
    {
      fields: ["descricao", "situacao", "membroid", "datahoracriacao"],
    }
  );

  res.json({
    message: "New tipo created!",
  });
}

export async function getTipById(req, res) {
  const { id } = req.params;

  const tipo = await Tipo.findOne({
    where: {
      id,
    },
  });

  res.json(tipo);
}

export async function deleteTipoById(req, res) {
  const { id } = req.params;

  Tipo.destroy({
    attributes: [
      "id",
      "descricao",
      "situacao",
      "membroid",
      "datahoracriacao",
      "datahoraactual",
    ],
    where: {
      id,
    },
  });

  res.send({
    message: "Tipo deleted!",
  });
}

export async function updateTipoById(req, res) {
  const { id } = req.params;
  const { descricao, situacao, membroid } = req.body;

  const tipo = await Tipo.findOne({
    attributes: ["id", "descricao", "situacao", "membroid", "datahoraactual"],
    where: {
      id,
    },
  });

  const udateTipo = await Tipo.update(
    {
      descricao,
      situacao,
      membroid,
      datahoraactual: new Date,
    },
    {
      where: { id },
    }
  );

  res.json({
    message: "Tipo updated!",
    udateTipo,
  });
}

export async function geTipoByProject(req, res) {
  const { membroid } = req.params;

  const tipo = await Tipo.findAll({
    attributes: [
      "id",
      "descricao",
      "situacao",
      "membroid",
      "datahoracriacao",
      "datahoraactual",
    ],
    where: { membroid },
  });

  res.json({
    tipos: tipo,
  });
}
