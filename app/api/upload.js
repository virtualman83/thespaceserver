module.exports = app => {
  // import the require modules
  const express = require("express"),
    bodyParser = require("body-parser"),
    multer = require("multer");
  var path = require("path");
  var http = require('http');
  var fs = require('fs');
  var fileupload = require("express-fileupload");
  app.use(fileupload());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static('./public'));
  var os = require('os');
  os.tmpDir = os.tmpdir;
  // SET STORAGE
/*var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
      console.log("file"+req.file+req.files);
    cb(null, file.fieldname + '-' + Date.now())
  }
})*/
var upload = multer({ dest: 'uploads/' })


//single file upload api
app.post("/uploadcomposition", upload.single("photo"), (req, res, next) => {
  try {
    const file = req.files.photo;
    //  console.log(path.extname(file.originalname));
    if (!file) {
      res.status(400).json({
        status: "0",
        url: "None",
        code: "400",
        message: "Veuillez chargée un fichier"
      });
    } else {
      var filename = Date.now() + ".png";
      var fileUrl = "./public/images/compositions/" + filename;
      file.mv(fileUrl, function(err, result) {
        if (err) throw err;
        res.status(200).json({
          status: "1",
          url: "images/compositions/" + filename,
          code: "200",
          message: "Image chargée avec succes"
        });
      });
    }
  } catch (err) {
    console.log(error.message);
    res.status(200).json({
      status: "0",
      url: "None",
      code: "500",
      message: error.message
    });
  }
});




  //single file upload api
  app.post("/uploadaccessoire", upload.single("photo"), (req, res, next) => {
    try {
      const file = req.files.photo;
      //  console.log(path.extname(file.originalname));
      if (!file) {
        res.status(400).json({
          status: "0",
          url: "None",
          code: "400",
          message: "Veuillez chargée un fichier"
        });
      } else {
        var filename = Date.now() + ".png";
        var fileUrl = "./public/images/accessoires/" + filename;
        file.mv(fileUrl, function(err, result) {
          if (err) throw err;
          res.status(200).json({
            status: "1",
            url: "images/accessoires/" + filename,
            code: "200",
            message: "Image chargée avec succes"
          });
        });
      }
    } catch (err) {
      console.log(error.message);
      res.status(200).json({
        status: "0",
        url: "None",
        code: "500",
        message: error.message
      });
    }
  });

  app.post("/uploadscene", upload.single("photo"), (req, res, next) => {
    try {
      const file = req.files.photo;
      //  console.log(path.extname(file.originalname));
      if (!file) {
        res.status(400).json({
          status: "0",
          url: "None",
          code: "400",
          message: "Veuillez chargée un fichier"
        });
      } else {
        var filename = Date.now() + ".png";
        var fileUrl = "./public/images/scene/" + filename;
        file.mv(fileUrl, function(err, result) {
          if (err) throw err;
          res.status(200).json({
            status: "1",
            url: "images/scene/" + filename,
            code: "200",
            message: "Image chargée avec succes"
          });
        });
      }
    } catch (err) {
      console.log(error.message);
      res.status(200).json({
        status: "0",
        url: "None",
        code: "500",
        message: error.message
      });
    }
  });

  //single file upload api
  app.post("/uploadclasse", upload.single("photo"), (req, res, next) => {
    try {
      const file = req.files.photo;
      //  console.log(path.extname(file.originalname));
      if (!file) {
        res.status(400).json({
          status: "0",
          url: "None",
          code: "400",
          message: "Veuillez chargée un fichier"
        });
      } else {
        var filename = Date.now() + ".png";
        var fileUrl = "./public/images/classes/" + filename;
        file.mv(fileUrl, function(err, result) {
          if (err) throw err;
          res.status(200).json({
            status: "1",
            url: "images/classes/" + filename,
            code: "200",
            message: "Image chargée avec succes"
          });
        });
      }
    } catch (err) {
      console.log(error.message);
      res.status(200).json({
        status: "0",
        url: "None",
        code: "500",
        message: error.message
      });
    }
  });

  //single file upload api
  app.post("/uploadSpriteImage", upload.single("photo"), (req, res, next) => {
    try {
      const file = req.files.photo;
      //  console.log(path.extname(file.originalname));
      if (!file) {
        res.status(400).json({
          status: "0",
          url: "None",
          code: "400",
          message: "Veuillez chargée un fichier"
        });
      } else {
        var filename = Date.now() + ".png";
        var fileUrl = "./public/images/Sprites/" + filename;
        file.mv(fileUrl, function(err, result) {
          if (err) throw err;
          res.status(200).json({
            status: "1",
            url: "images/Sprites/" + filename,
            code: "200",
            message: "Image chargée avec succes"
          });
        });
      }
    } catch (err) {
      console.log(error.message);
      res.status(200).json({
        status: "0",
        url: "None",
        code: "500",
        message: error.message
      });
    }
  });

  //single file upload api
  app.post("/uploadbackground", upload.single("photo"), (req, res, next) => {
    try {
             console.log("In Upload File ");
      const file = req.files.photo;
      const fileNamereceived = req.body.fileName;
       console.log("fileNamereceived "+fileNamereceived);
      if (!file) {
        res.status(400).json({
          status: "0",
          url: "None",
          code: "400",
          message: "Veuillez chargée un fichier"
        });
      } else {
        var filename;
        if (fileNamereceived == null || fileNamereceived == undefined) {
          filename = Date.now() + ".png";
        } else {
          filename = fileNamereceived + ".png";
        }
        var fileUrl = "./public/images/background/" + filename;
        file.mv(fileUrl, function(err, result) {
          if (err) throw err;
          res.status(200).json({
            status: "1",
            url: "images/background/" + filename,
            code: "200",
            message: "Image chargée avec succes"
          });
        });
      }
    } catch (err) {
      console.log(error.message);
      res.status(200).json({
        status: "0",
        url: "None",
        code: "500",
        message: error.message
      });
    }
  });

  app.post("/uploadfamille", upload.single("photo"), (req, res, next) => {
    try {
      const file = req.files.photo;
      //  console.log(path.extname(file.originalname));
      if (!file) {
        res.status(400).json({
          status: "0",
          url: "None",
          code: "400",
          message: "Veuillez chargée un fichier"
        });
      } else {
        var filename = Date.now() + ".png";
        var fileUrl = "./public/images/familles/" + filename;
        file.mv(fileUrl, function(err, result) {
          if (err) throw err;
          res.status(200).json({
            status: "1",
            url: "images/familles/" + filename,
            code: "200",
            message: "Image chargée avec succes"
          });
        });
      }
    } catch (err) {
      console.log(error.message);
      res.status(200).json({
        status: "0",
        url: "None",
        code: "500",
        message: error.message
      });
    }
  });

  app.post("/uploadconstante", upload.single("photo"), (req, res, next) => {
    try {
      const file = req.files.photo;
      //  console.log(path.extname(file.originalname));
      if (!file) {
        res.status(400).json({
          status: "0",
          url: "None",
          code: "400",
          message: "Veuillez chargée un fichier"
        });
      } else {
        var filename = Date.now() + ".png";
        var fileUrl = "./public/images/constantes/" + filename;
        file.mv(fileUrl, function(err, result) {
          if (err) throw err;
          res.status(200).json({
            status: "1",
            url: "images/constantes/" + filename,
            code: "200",
            message: "Image chargée avec succes"
          });
        });
      }
    } catch (err) {
      console.log(error.message);
      res.status(200).json({
        status: "0",
        url: "None",
        code: "500",
        message: error.message
      });
    }
  });

  app.post("/uploadmenu", upload.single("photo"), (req, res, next) => {
    try {
      const file = req.files.photo;
      //  console.log(path.extname(file.originalname));
      if (!file) {
        res.status(400).json({
          status: "0",
          url: "None",
          code: "400",
          message: "Veuillez chargée un fichier"
        });
      } else {
        var filename = Date.now() + ".png";
        var fileUrl = "./public/images/menus/" + filename;
        file.mv(fileUrl, function(err, result) {
          if (err) throw err;
          res.status(200).json({
            status: "1",
            url: "images/menus/" + filename,
            code: "200",
            message: "Image chargée avec succes"
          });
        });
      }
    } catch (err) {
      console.log(error.message);
      res.status(200).json({
        status: "0",
        url: "None",
        code: "500",
        message: error.message
      });
    }
  });


  app.post("/uploadmoyen", upload.single("photo"), (req, res, next) => {
    try {
      const file = req.files.photo;
      //  console.log(path.extname(file.originalname));
      if (!file) {
        res.status(400).json({
          status: "0",
          url: "None",
          code: "400",
          message: "Veuillez chargée un fichier"
        });
      } else {
        var filename = Date.now() + ".png";
        var fileUrl = "./public/images/moyens/" + filename;
        file.mv(fileUrl, function(err, result) {
          if (err) throw err;
          res.status(200).json({
            status: "1",
            url: "images/moyens/" + filename,
            code: "200",
            message: "Image chargée avec succes"
          });
        });
      }
    } catch (err) {
      console.log(error.message);
      res.status(200).json({
        status: "0",
        url: "None",
        code: "500",
        message: error.message
      });
    }
  });

  app.post("/uploadservice", upload.single("photo"), (req, res, next) => {
    try {
      const file = req.files.photo;
      //  console.log(path.extname(file.originalname));
      if (!file) {
        res.status(400).json({
          status: "0",
          url: "None",
          code: "400",
          message: "Veuillez chargée un fichier"
        });
      } else {
        var filename = Date.now() + ".png";
        var fileUrl = "./public/images/services/" + filename;
        file.mv(fileUrl, function(err, result) {
          if (err) throw err;
          res.status(200).json({
            status: "1",
            url: "images/services/" + filename,
            code: "200",
            message: "Image chargée avec succes"
          });
        });
      }
    } catch (err) {
      console.log(error.message);
      res.status(200).json({
        status: "0",
        url: "None",
        code: "500",
        message: error.message
      });
    }
  });

  app.post("/uploadingredient", upload.single("photo"), (req, res, next) => {
    try {
      const file = req.files.photo;
      //  console.log(path.extname(file.originalname));
      if (!file) {
        res.status(400).json({
          status: "0",
          url: "None",
          code: "400",
          message: "Veuillez chargée un fichier"
        });
      } else {
        var filename = Date.now() + ".png";
        var fileUrl = "./public/images/ingredients/" + filename;
        file.mv(fileUrl, function(err, result) {
          if (err) throw err;
          res.status(200).json({
            status: "1",
            url: "images/ingredients/" + filename,
            code: "200",
            message: "Image chargée avec succes"
          });
        });
      }
    } catch (err) {
      console.log(error.message);
      res.status(200).json({
        status: "0",
        url: "None",
        code: "500",
        message: error.message
      });
    }
  });

};
