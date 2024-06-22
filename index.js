let express = require("express");
let app = express();

// Question 1:
// Create an endpoint that returns a welcome message to a student who wants to learn functions.
// function to return a welcome message
function getWelcomeMessage() {
  return "Hello, I want to learn function ☺";
}
// Endpoint to return a welcome message
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

// Question 2:
// Create an endpoint that takes a username as a query parameter and returns a greeting message.
// Endpoint to return greeting message
// function to return a greeting message
function getGreetingMessage(username){
  return "Hey, " + username + "! I'm ready to learn function with BYTR";
}
// Endpoint to return a greeting message
app.get('/greet', (req, res) => {
  let username = req.query.username;

  res.send(getGreetingMessage(username));
});


// Question 3:
// Create an endpoint that takes the number of yearsOfExp in functions as a query parameter and returns a message indicating the person's experience.
function checkYearsOfExp(yearsOfExp) {
  if (yearsOfExp > 0) {
    "You have some experience with functions. Great!";
  } else {
    "No worries. You will start writing functions in no time!";
  }
}
// Endpoint to return a message of experience
app.get('/message', (req, res) => {
  let yearsOfExp = parseFloat(req.query.yearsOfExp);

  res.send(checkYearsOfExp(yearsOfExp));
});

// Question 4:
// Create an endpoint that takes the number of days and hours a student can dedicate to learn functions per week and returns the total hours available per week.
// functionfun to calculate total time
function getTime(days, hours) {
  return days * hours;
}
// Endpoint to return total time
app.get('/hours', (req, res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);

  res.send(getTime(days, hours).toString());
});

//Question 5:
//Create an endpoint that takes a username and a boolean hasCompleted indicating module completion status, and returns a message indicating if the student has completed the modules or not.
// function to check module completed or not
function getModuleCompletion(username, hasCompleted) {
  if (hasCompleted === "true") {
    return username + " has completed the modules";
  } else {
    return username + " has not completed the modules";
  }
}
// Endpoint to return module
app.get('/module-completion-status', (req, res) => {
  let username = req.query.username;
  let hasCompleted = req.query.hasCompleted;

  res.send(getModuleCompletion(username, hasCompleted));
});

// Question 6:
//Create an endpoint that takes a student's city and name, and returns a personalized greeting message.
// function return a personalized greeting message
function getPersonalizedGreeting(city, name) {
  return "Hello, " + name + "! what's famous about " + city;
}
// Endpoint to return personalized message
app.get('/personalized-greeting', (req, res) => {
  let city = req.query.city;
  let name = req.query.name;

  res.send(getPersonalizedGreeting(city, name));
});

// Question 7:
// Create an endpoint that takes a student's birthyear and returns the age.
// function to calculate age
function findAge(birthyear) {
  return 2024 - birthyear;
}
// Endpoint to return age
app.get('/find-age', (req, res) => {
  let birthyear = parseFloat(req.query.birthyear);

  res.send(findAge(birthyear).toString());
});

// Question 8:
// Create an endpoint that takes the number of days per week and hours per day a student can dedicate to learning functions and returns whether it is sufficient (>= 30 hours per week) or not.
// function to calculate the time
function findRequiredTime(days, hours) {
  let time = days * hours;

  if (time >= 30) {
    return "The time being dedicated is sufficient for learning functions"
  } else {
    return "The time being dedicated is not sufficient for learning functions";
  }
}
// Endpoint to return sufficient time
app.get('/is-time-sufficient', (req, res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);

  res.send(findRequiredTime(days, hours).toString()); 
});

let port = 8000;
app.listen(port, () => {
  console.log("server is running on the port number is: " + port);
});