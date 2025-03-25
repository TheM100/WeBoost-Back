const express = require("express");
const router = express.Router();

const { formContact } = require("../controllers/controllers")


router.post("/enviarMensajeContacto/", formContact);



module.exports = router;