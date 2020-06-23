module.exports = (app, db) => {
  app.post("/prefab", (req, res) =>
    db.models.Prefab.findAll({
      order: [["ID", "ASC"]]
    }).then(result => {
      //  console.log(result);
      res.json(result.map(x => x.dataValues));
    })
  );

  app.post("/syncprefab", (req, res) => {
    //console.log(req.body.arrayPrefab);
    let prefabs = req.body.arrayPrefab;
    let works = [];
    prefabs.forEach((item, i) => {
      let work = db.models.Prefab.findOrCreate({
        where: {
          Nom: item
        }
      });
      works.push(work);
    });

    db.models.Prefab.findAll().then(result => {
      let array = result.map(x => x.dataValues);
      array.forEach((item, i) => {
        if (!prefabs.includes(item.Nom)) {
          let work = db.models.Prefab.destroy({
            where: {
              Nom: item.Nom
            }
          });
          works.push(work);
        }
      });
    });

    Promise.all(works).then(() => {
      res.send("ok");
    });
  });
};
