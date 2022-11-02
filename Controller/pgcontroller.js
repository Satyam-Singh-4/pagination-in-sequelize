const student = require("../Entity/student");

const bulkAdd = async (req, res) => {
  try {
    const resp = await student.bulkCreate(req.body);
    res.send(resp);
  } catch (error) {
    res.send("not send");
  }
};

const findAll = async (req, res) => {
  const { page, size } = req.body;

  try {
    const resp = await student.findAndCountAll({
      limit: size,
      offset: page * size,
      where:{
        id:req.body.id
      }
    },);

    res.send(resp);
  } catch (err) {
    console.error(err.message);
  }
};
module.exports = {
  bulkAdd,
  findAll,
};
