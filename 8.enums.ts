/* Enums -> Way to define a set of named constants (collection of related values that can be used interchangably in code) */
enum WeatherAutomatic {
  Sunny,
  Cloudy,
  Rainy,
}
console.log(
  "WeatherAutomatic (assigned automatic numeric value starting from 0)  ---> ",
  WeatherAutomatic
);
console.log("Enum Value of 'Cloudy'  --->", WeatherAutomatic.Cloudy);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

enum WeatherNumber {
  Sunny = 3,
  Cloudy,
  Rainy,
}
console.log(
  "WeatherNumber (assigned automatic numeric value starting from the given value)  ---> ",
  WeatherNumber
);
console.log("Enum Value of 'Cloudy'  --->", WeatherNumber.Cloudy);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

enum WeatherString {
  Sunny = "S",
  Cloudy = "C",
  Rainy = "R",
}
console.log(
  "WeatherString (assigned with string values)  ---> ",
  WeatherString
);
console.log("Enum Value of 'Cloudy'  --->", WeatherString.Cloudy);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
