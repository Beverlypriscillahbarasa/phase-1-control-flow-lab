function scuberGreetingForFeet(ride) {
  // Check the distance of the ride and return appropriate response
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (ride > 400 && ride <= 2000) {
    return 'That will be twenty bucks.';
  } else if (ride > 2000 && ride <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}
// Call the function and log the result to the console
console.log(scuberGreetingForFeet(199)); // Output: This one is on me!
console.log(scuberGreetingForFeet(1500)); // Output: That will be twenty bucks.
console.log(scuberGreetingForFeet(2001)); // Output: I will gladly take your thirty bucks.
console.log(scuberGreetingForFeet(2501)); // Output: No can do.

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go.";
  // if (city === "NYC") {
  //   return "Ok, sounds good.";
  // if (city === "Pittsburgh") {
  // return 'No go.';
  // }
  // }
}
console.log(ternaryCheckCity("NYC")); // Output: Ok, sounds good.
console.log(ternaryCheckCity("Pittsburgh")); // Output: No go.

// const tip;
function switchOnCharmFromTip(tip) {
  // Write your code here!

  //   if (tip === 'generous') {
  //     return 'Thank you so much.';
  //   } else if (tip !== 'generous') {
  //     return 'Thank you.';
  //   } else {
  //     return 'Bye.';
  //   }
  // }

   switch (tip) {
     case "generous":
       return "Thank you so much.";
       break;
     case "not as generous":
       return "Thank you.";
       break;
     default:
       return "Bye.";
       break;
  }
}
console.log("generous");
console.log("not as generous");
console.log("thanks for everything");