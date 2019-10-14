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
