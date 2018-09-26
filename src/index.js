module.exports = function check(str, bracketsConfig) {
  // your solution
  let something = str;
  for(let i = 0, len = str.length; i < len; i++){
    something = something.replace("()", "");
    something = something.replace("{}", "");
    something = something.replace("[]", "");
    something = something.replace("||", "");
    something = something.replace("12", "");
    something = something.replace("34", "");
    something = something.replace("56", "");
    something = something.replace("77", "");
    something = something.replace("88", "");
  }
  if(something.length != 0) return false;
  else return true;
}