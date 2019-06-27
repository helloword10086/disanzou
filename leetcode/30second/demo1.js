const worlds = (str,pattern = /[^a-zA-Z-]+/) =>str.split(pattern);
console.log(worlds('I love javaScrpit!!'));
