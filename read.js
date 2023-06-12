"use strict";

const fs = require("fs");
const Korisnik = require("./korisnik.js");

module.exports = class Read {

    static readVetFile (unesiIme) {
        const data = fs.readFileSync(unesiIme);
        const nesto = JSON.parse(data);
        console.log(nesto);

        let SpisakNiz = [];
        nesto.forEach(function(value, index, array){
            const ime = new Korisnik(
                value.imeVlasnika,
                value.prezimeVlasnika,
                value.email,
                value.grad,
                value.vrstaLjubimca,
                value.imeLjubimca,
                value.godinaRodjenjaLjubimca
            )
            SpisakNiz.push(ime);
        });
        return SpisakNiz;
    }
}