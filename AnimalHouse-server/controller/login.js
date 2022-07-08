//Controller per le operazioni di login

const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
//const { db } = require("../connessioneDB");
// ! Risolvere perché non vada il modulo connessione DB
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

const URI = process.env.URI;
const mongo = new MongoClient(URI);
const db = mongo.db("AnimalHouse");

// Controllo che esista una corrispondenza di username e passoword nel DB
exports.controlloUtente = async (req, res) => {
  console.log("Credenziali  ", req.body);
  return await db.collection("utenti").findOne({username: req.body.user, password: req.body.password}, (err, cursor) => {
  if(err) console.log("Err: ", err);
  
  console.log(cursor);

  const payload = {
    "id": cursor._id,
    "username": cursor.username,
    "ruolo": cursor.ruolo
  };

  console.log("payload", payload);
  token = jwt.sign(payload, "PASSWORDFORTE");
  res.json(token);
  }
  )     
}

//Crea un JWT e lo ritorna per salvarlo nel cookie
exports.login = async (req, res) => {
  
}