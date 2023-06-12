"use strict";

class Korisnik {
    #imeVlasnika = '//';
    #prezimeVlasnika = '//';
    #email = '//';
    #grad = '//';
    #vrstaLjubimca = '//';
    #imeLjubimca = '//';
    #godinaRodjenjaLjubimca = '//';

    constructor(imeVlasnika,prezimeVlasnika,email,grad,vrstaLjubimca,imeLjubimca,godinaRodjenjaLjubimca)
    {   if ((imeVlasnika !== '') && (imeVlasnika !== null) && (imeVlasnika !== undefined)) {
        this.#imeVlasnika = imeVlasnika;
    }
        if ((prezimeVlasnika !== '') && (prezimeVlasnika !== null) && (prezimeVlasnika !== undefined)) {
            this.#prezimeVlasnika = prezimeVlasnika;
        }
        if ((email !== '') && (email !== null) && (email !== undefined)) {
            this.#email = email;
        }
        if ((grad !== '') && (grad !== null) && (grad !== undefined)) {
            this.#grad = grad;
        }
        if ((vrstaLjubimca !== '') && (vrstaLjubimca !== null) && (vrstaLjubimca !== undefined)){
            this.#vrstaLjubimca = vrstaLjubimca;
        }
        if ((imeLjubimca !== '') && (imeLjubimca !== null) && (imeLjubimca !== undefined)) {
            this.#imeLjubimca = imeLjubimca;
        }
        if ((godinaRodjenjaLjubimca !== '') && (godinaRodjenjaLjubimca !== null) && (godinaRodjenjaLjubimca !==undefined)){
            this.#godinaRodjenjaLjubimca = godinaRodjenjaLjubimca;
        }

    }

    getImeIPrezimeVlasnika (){
        return `Ime i prezime: ${this.#imeVlasnika}, ${this.#prezimeVlasnika}`
    }
    getEmail () {
        return `Email adresa: ${this.#email}`
    }
    getGrad(){
        return `Grad: ${this.#grad}`
    }
    getVrstaLjubimca(){
        return `Vrsta ljubimca: ${this.#vrstaLjubimca}`
    }
    getImeLjubimca(){
        return `Ime ljubimca: ${this.#imeLjubimca}`
    }
    getGodinaRodjenjaLjubimca(){
        return `Godina rodjenja ljubimca: ${this.#godinaRodjenjaLjubimca}`
    }


}

module.exports = Korisnik;