# extratctLinksMd

 Esta aplicação destina-se à extração de todos os links encontrados em uma entrada de string.

## Como instalar:

```
$  npm install extratctlinksfrom-md
```

## Como utilizar:

```node
const getLinksFromMd = require('extratctlinksfrom-md');
const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua.';
getLinksFromMd(str);

// [
//   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//   { href: 'http://foo.com', text: 'foo' },
// ]
```

## Roadmap oficial do projeto*

### Versão 3.0.0

* README translated to english.

### Versão 2.0.0

* Correção de bugs.

### Versão 1.0.0

* Funcionalidades: extração de links;
* Entrada de Strings.

## Keywords

get link, markdown. 