/***    Controller per le operazioni di login     ***/

const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
const db = require("../connessioneDB");

// ! secondo me si possono unire in un unico ~Alsi
exports.controlloUtente = async (req, res) => {
    console.log("Credenziali  ", req.body);
    return await db.collection("utenti").findOne({username: req.body.user, password: req.body.password}, (err, cursor) => {
      if(err) console.log("Err: ", err);
      console.log(cursor);
      res.json(cursor);
    });
  }
  
//Crea un JWT e lo ritorna per salvarlo nel cookie
exports.login = async (req, res) => {
    const payload = req.body;
    token = jwt.sign(payload, "PASSWORDFORTE");
    res.json(token);
}