var i = 1;

while (i < 20) {
    console.log("Howdy people!");
    i++;
}
//"While" loops are not used alot, "if" loops are the go to. 

var moviesArray = ["Casablanca", "Star Wars", "Singing in the Rain", "The Wizard of Oz", "Die Hard", "Nightmare before Christmas"];

var i = 0;

while (i < moviesArray.length) {
    console.log(moviesArray[i]);
    i++;
}
// having length in the movie array makes the code more flexible without having to change a bunch of script. 

var i = 1;

while (i <= 100) {
    console.log("Q U A C K IM A DUCK")
    i++;
}

//(i<=Number)  - Makes the number less or equal to whatever you put.

for (var i = 0; i < moviesArray.length; i++) {
    console.log(moviesArray[i]);
}

//for(var i = 0;  ) - That's the start.    "moviesArray.length; i++ " - that's the end.
//for loops are much more common than while
//while loops does the i++ after at the end, after console.log
//for loops does the thing before the code starts. 

var favoriteFoods = ["Pizza", "Pears", "Peaches", "Manwich?", "Spaghett", "Mac&Cheese", "Chicken Nuggets"];

var i = 0;

for (var i = 0; i < favoriteFoods.length; i++) {
    console.log(favoriteFoods[i]);
}



var favoriteInterest = ["Eating", "Gaming", "Living", "sleeping", "dying", "listening to music", "typing"];
for (var i = 0; i < favoriteInterest.length; i++) {

    if (favoriteInterest[i] === favoriteInterest[3]) {
        console.log(favoriteInterest[i], "is my favorite interest")
    }
    else {
        console.log("one of my interest is:",favoriteInterest[i]);
    }
}
// this one organizes a list and says that the 4th one is the favorite interest out of all the interest

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for (var i = 0; i < harryPotterTitles.length; i++) {
    console.log(harryPotterTitles[i]); }
    // This one is a basic loop for harry potter tiles. 

    var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
 for (var i=0; i < grades.length; i++) {
 if (grades[i] >= 70 && grades[i] <= 76) {
     console.log(grades[i], "You got a D")
 } else if (grades[i] >= 77 && grades[i] <= 84) {
     console.log(grades[i], "You got a C") }
      else if (grades[i] >= 85 && grades[i] <= 92) {
         console.log(grades[i],"You got a B")
      } else if (grades[i] >= 93 && grades[i] <= 100) {
          console.log(grades[i], "you gotta a, congrats u smart man")
      }
     }
     // CHECK BACK ON THIS, THIS USES CONDITIONALS AND LOOOPS AAAAAAAAAAAAAAAAAAAAAAAH
     
 