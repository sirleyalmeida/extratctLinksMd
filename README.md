# extratctLinksMd

 Esta aplicação destina-se à extração de todos os links encontrados em uma entrada de string.

## Como instalar:

```
$  npm install extratctlinksfrom-md
```

## Como utilizar:

```javascript
const getLinksFromMd = require('extratctlinksfrom-md');
const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
getLinksFromMd(str);

// [
//   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//   { href: 'http://foo.com', text: 'foo' },
// ]
```

## roadmap oficial do projeto*

### Versão 3.0.0

* README translated to english.

### Versão 2.0.0

* Correção de bugs.

### Versão 1.0.0

* Funcionalidades: extração de links;
* Entrada de Strings.

## Keywords

get link, markdown. 