// Question 1
const checkPass = (score) => {
  let message;
  score >= 180 ? (message = "Passed") : (message = "Failed");
  console.log(message);
};
checkPass(180);

// Question 2
const checkEligibility = (age) => {
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are not eligible");
  }
};

checkEligibility(18);

// Question 3
function checkGrade(name, score) {
  let grade;
  if (score >= 90) {
    grade = "Excellent";
  } else if (score >= 75) {
    grade = "Good";
  } else if (score >= 50) {
    grade = "Average";
  } else {
    grade = "Failed";
  }
  console.log(`${name},Your grade is ${grade}`);
}
checkGrade("Ayomide", 100);

// Question 4
const checkAccess = (hasID, isAbove18) => {
  hasID && isAbove18
    ? console.log("Access Granted")
    : console.log("Access Denied");
};
checkAccess(true, false);

// Question 5
const checkStudentsGrade = () => {
  const studentScores = [50, 80, 30, 42, 65, 70, 48];
  for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] > 50) {
      console.log(`Your score is ${studentScores[i]}, you passed`);
    } else {
      console.log(`Your score is ${studentScores[i]}, you failed`);
    }
  }
};
checkStudentsGrade();

// Question 6

const passCheck = (mathScore, englishScore) => {
  if (mathScore >= 50 && englishScore >= 50) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};
passCheck(40, 70);

// Question 7

function checkDetails(email, phoneNumber) {
  if (email && phoneNumber) {
    console.log("You have Successfully Registered");
  } else {
    console.log("Email and Phone Number is Required");
  }
}
checkDetails("iucoueoiunl", "hkbku");

// Question 8
function checkInput(username, password) {
  if (!username || !password) {
    console.log("Invalid Input");
  } else {
    console.log("Go Ahead");
  }
}
checkInput("Ayfash", 1223);

// Question 9
const checkWorkRate = (hoursWorked) => {
  hoursWorked >= 40 ? console.log("Full-Time") : console.log("Part-Time");
};
checkWorkRate(45);

// Question 10
const checkNumber = (num1, num2) => {
  num1 > num2 ? console.log(num1) : console.log(num2);
};
checkNumber(25, 18);
