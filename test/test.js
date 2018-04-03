'use strict';

let expect = require('chai').expect;
let silabas = require('../index');

describe('#silabas', function() {
  it('should return the syllables for a given word', function() {
    let result = silabas.getSilabas('espejo');

    expect(result.silabas[0].silaba).to.equal('es');
    expect(result.silabas[1].silaba).to.equal('pe');
    expect(result.silabas[2].silaba).to.equal('jo');
  });

  it('should return the length of a word', function() {
    let word = 'escalera';
    let result = silabas.getSilabas(word);

    expect(result.longitudPalabra).to.equal(word.length);
  });

  it('should return the position of the tonic syllable', function() {
    let result = silabas.getSilabas('estetoscopio');

    expect(result.tonica).to.equal(4);
  });

  it('should return the letter with the tilde', function() {
    let word = 'adminículo';
    let result = silabas.getSilabas(word);

    expect(result.letraTildada).to.equal(word.indexOf('í'));
  });
});
