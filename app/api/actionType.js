module.exports = (app, db) => {
  app.post("/actiontype", (req, res) =>
    db.models.ActionType.findAll({
      order: [["ID", "ASC"]],
    }).then(result => {
    //  console.log(result);
      res.json(result.map(x => x.dataValues));
    })
  );






};
