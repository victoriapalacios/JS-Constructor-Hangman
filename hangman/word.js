var words = ["chicago", "toronto", "beijing", "tokyo", "london"];

var hangmanWords = [
["C", "H", "I", "C", "A", "G", "O",],
["T", "O", "R", "O", "N", "T", "O"],
["B", "E", "I", "J", "I", "N", "G"],
["T", "O", "K", "Y", "O"],
["L", "O", "N", "D", "O", "N"]
]

exports.choosenWord = function(){
  var random = Math.floor((Math.random()*(hangmanWords.length-1)));
  var choosenWord = words[random];
  var hangmanWord = new Array(choosenWord.length);

  for (var i = 0; i < hangmanWord.length; i++){
    hangmanWord[i] = " _ " ;
  }
  console.log(hangmanWord);
};
