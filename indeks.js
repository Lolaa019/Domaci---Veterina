"use strict";

const Reader = require ("./read");
const Writer = require ("./writer");

const SpisakNiz = Reader.readVetFile("korisnici.json");
Writer.StampajImena(SpisakNiz);


