const { client } = require("../config/redis");

const limitPeople = async (req, res, next) => {
  try {
    const id = req.params.id;
    const room = JSON.parse(await client.HGET("ROOMS", id));
    if (room.integrantes.length < 2) {
      next()
    } else {
      res.send({available: false, room: "La sala esta llena"})
    }
  } catch (error) {
    console.log(error);
    res.status(404)
    res.send({error, msg: "ALGO_OCURRIO"})
  }
}

module.exports = {limitPeople}