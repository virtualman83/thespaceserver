module.exports = (app, db) => {
  app.post("/location", (req, res) =>
    db.models.Location.findAll({
      order: [["ID", "ASC"]]
    }
  ).then(result => {
      res.json(result.map(x => x.dataValues));
    })
  );

  
};
