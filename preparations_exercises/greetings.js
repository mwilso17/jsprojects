let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

greetPeople();

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage("Good Evening!");
greetPeople();