Silabea
=========

Node package that split Spanish words into syllables.

Forked from [https://github.com/ncofrem/silabajs](https://github.com/ncofrem/silabajs)

## Installation

  `npm install @javier/silabea`

## Usage

```javascript
let silabas = require('@javier/silabas');
let information = silabas.getSilabas('planetoides');

console.log(information);
```

Output should be:

```javascript
{
  palabra: 'planetoides',
  longitudPalabra: 11,
  numeroSilaba: 4,
  silabas:
  [
   { inicioPosicion: 0, silaba: 'pla' },
   { inicioPosicion: 3, silaba: 'ne' },
   { inicioPosicion: 5, silaba: 'toi' },
   { inicioPosicion: 8, silaba: 'des' } 
   ],
  tonica: 3,
  letraTildada: -1,
  acentuacion: 'Grave (Llana)',
  hiato: [],
  diptongo: [ { tipo: 'Diptongo Drececiente', silaba: 'oi' } ],
  triptongo: [] 
}
```

## Tests

  `npm test`

---

MIT License

Copyright (c) 2018 Nicolás Cofré Méndez (of the original library)  
Copyright (c) 2018 Javier Arce (of the node package and its tests)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
