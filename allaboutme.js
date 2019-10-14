var myName ="Jimmy Neutron";

var firstName ="Jimmy";
var lastName = "Neutron";
var age = 13;
var likesTravel = true;
var favoriteWeather = "Favorite Weather is"
var favoriteWeatherTemp = 79;

var fullName = firstName + " " + lastName;
var favoriteWeather = favoriteWeather + " " + favoriteWeatherTemp;



var tempArray = [97, 55, 62, 82, 79, 91, 74, 86];

var months = ['Jan', 'March', 'April', 'June'];
// Inserts 'Feb' at an index of 1 and removes 0 elements, first number = where, 2nd number = how much you want to remove.
months.splice(1, 0, 'Feb');

console.log(favoriteWeather); 
console.log(tempArray[4]);
console.log(myName);
console.log(firstName);
console.log(lastName);
console.log(likesTravel);


tempArray.push(100);
console.log(tempArray[3]);



var movieArray = ["28 Weeks Later", "Shaun of the Dead"]
console.log(movieArray[0]);
console.log(movieArray[1]);

console.log(`The Two Movies that I have Listed were ${movieArray[0]} and ${movieArray[1]}`);

// Objects can hold variables and Arrays
var leahObject = {
    firstName: "Leah",
    lastName: "Gwin",
    age: 27
}
// Variables such as the one below lets you search for any of the listed things below.
var williamObject = {
    firstName: "William",
    lastName: "Kimball",
    age: 21,
    hobbies: ["calligraphy", "travel", "banjo"]
}
// Will output calligraphy
console.log(williamObject.hobbies[0]);
    
var eliObject = {
firstName = "Eli",
lastName = "Torres",
age = 21,
likesTravel = false,
favoriteMovies = ["Shaun of the Dead", "28 Weeks Later", "Interstellar"], }

var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [32, 34, 23, 31, 98],



var highTemperatures = [55, 57, 53, 47, 56, 50];
var weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32,
     },
     
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM",
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]
}
console.log(eliObject.high);
console.log(eliObject.sunrise[1]);

// Expected output: "Math works!"
if(2+2 === 4){
  console.log("Math works!");
} else {
  console.log("Math is broken.")
}

// Expected output: "Math works!"

