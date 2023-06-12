"use strict";

module.exports = class Writer {
    static StampajImena(nizImena){
        nizImena.forEach(function (ime, index, niz){
            console.log(ime.getImeIPrezimeVlasnika());
            console.log(ime.getEmail());
            console.log(ime.getGrad());
            console.log(ime.getVrstaLjubimca());
            console.log(ime.getImeLjubimca());
            console.log(ime.getGodinaRodjenjaLjubimca());
            console.log("==============");


        });

    }
}