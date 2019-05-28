const fuzzysort = require('fuzzysort')
var drugsSmall = require('./drugsSmall.json');
var drugsLarge = require('./drugsLarge.json');


finalWords = ['adol', 'dol']
function matchEn(finalWords) {
  var mm = []
  for (var i = 0; i < finalWords.length; i++){
    var word = finalWords[i]
    const results = fuzzysort.go(word, drugsLarge, {limit: 5})
    var result = results.map(a => a.target);

    mm.push({result});
  }

  var mu = mm.map(a => a.result)
  var newmu = []
  var o = 0
  for (var i = 0; i < mu.length; i++){
    mz = mu[i]
    for (var j =  0; j < mz.length; j++){
      newmu.push({id : o,
                  result: mz[j]});
      o = o + 1;
    }
  }
return(newmu);
}


finalWords = ['adol', 'dol']
function matchEnword(word) {
  var mm = []

  const results = fuzzysort.go(word, drugsLarge, {limit: 5})
  var result = results.map(a => a.target);

  mm.push({result});

  var mu = mm.map(a => a.result)
  var newmu = []
  var o = 0
  for (var i = 0; i < mu.length; i++){
    mz = mu[i]
    for (var j =  0; j < mz.length; j++){
      newmu.push({id : o,
                  result: mz[j]});
      o = o + 1;
    }
  }
return(newmu);
}
console.log(matchEnword("congistal"));
