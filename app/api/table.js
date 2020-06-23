module.exports = (app, db) => {
  app.post("/table", (req, res) => {
    db.models.Table.findAll({
      order: [
        ["ID", "ASC"]
      ],
      include: [{
          model: db.models.ElementTransform,
          as: "transform",
          include: [{
            model: db.models.Element,
            as: "element"
          }]
        },
        {
          model: db.models.Device,
          
          order: [
            [ db.models.Device, 'ID', 'ASC' ]
          ],
          as: "Ecrans",
          include: [{
            model: db.models.IPAdresse,
            order: [
              ["Type", "ASC"]
            ]

          }]
        }
      ]
    }).then(result => {
      //  console.log(result);
      res.json(result.map(x => x.dataValues));
    })
  });










};