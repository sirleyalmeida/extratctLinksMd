function getLinksFromMd(str) {
  const regexLink = new RegExp(/(?<=\().+?(?=\))/g);
  const links = str.match(regexLink);

  const regexTxt = new RegExp(/(?<=\[).+?(?=\])/g);
  const text = str.match(regexTxt);

  const obj = links.map(function(elem, i) {
    return Object.assign({}, {
      href: elem,
      text: text[i]
    });
  });

  return obj;
}

module.exports = getLinksFromMd;