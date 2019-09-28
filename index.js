function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}

logShout =(string) =>{
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase();
  var uppercase = string.toUpperCase();
  if (string.toLowerCase() === lowercase){
    return 'I can\'t hear you!'
  } if (string.toUpperCase() === uppercase) {
  return 'YES INDEED!';
  } if(string = 'I love you, Grandma.'){
    return 
  }
}