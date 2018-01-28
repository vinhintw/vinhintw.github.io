////////////////////// speech recognition //////////////////////// 
var location = 0;

var help = function() {
  // document.getElementById('test').innerHTML += "hello";
  var help = new SpeechSynthesisUtterance('This is an auditory based simulation of Flinder Street Station. You can use the following voice commands: ');
  window.speechSynthesis.speak(help);
}

var whatIsThis = function() {
  var whatIsThis = new SpeechSynthesisUtterance('This is a project to improve people with vision impaired navigation skills. You will be listening to ');
  window.speechSynthesis.speak(whatIsThis);
}

var whatTimeIsThis = function() {
  location = document.querySelector('input[name="location"]:checked').value;
  var whatTimeIsThis = new SpeechSynthesisUtterance('You say B');
  window.speechSynthesis.speak(whatTimeIsThis);
}

var whereAmI = function() {
  var whereAmI = new SpeechSynthesisUtterance('You say B');
  window.speechSynthesis.speak(whereAmI);
}

var nextLocation = function() {
  var nextLocation = new SpeechSynthesisUtterance('You say B');
  window.speechSynthesis.speak(nextLocation);
}

var replay = function() {
  var replay = new SpeechSynthesisUtterance('You say B');
  window.speechSynthesis.speak(replay);
}

if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'help': help, // list of commands
    'what is this': whatIsThis, // description of project
    'what time is this' : whatTimeIsThis, // time when video was recorded
    'where am i' : whereAmI, // location information
    'next location' : nextLocation, // move to next location
    'replay' : replay // replay the video 
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}