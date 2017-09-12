$(document).ready(function(){
  //.ready is stating 'when the object $(object) is targeted, i want you to be ready and run this funtionality bt the curly
  //brackets
  // start jQuery
  var dangerousAsteroids = []
  $.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-04-15&end_date=2017-04-16&api_key=Cix4VND0FLpGOpiijzv4N4peW53CLDEkoQgn4Zw6').then(function(data){
    // console.log(data.near_earth_objects['2017-04-15' - '2017-04-16'])
    var neo = data.near_earth_objects; // neo is all of the near earth objects for date range
    for (date in neo) { // loops through all first objects (here named "dates") in near_earth_objects
      for (let i=0; i < neo[date].length; i++) { // loop through all found first "date" objects
        console.log(neo[date][i]); // logs all found objects in date range
        if (neo[date][i].is_potentially_hazardous_asteroid === true){
          dangerousAsteroids.push(neo[date][i])
        } // logs all found objects in date range

       // console.log(neo[date][i]); // HOW TO DRILL DEEPER IN OBJECT?  IS THIS A 'JSON OBJECT'?
      } // returns all near earth objects for data range
      console.log(dangerousAsteroids)
        // if ((neo[date][i]).hasOwnProperty(true)) {
        //   console.log('neo[date][i]');
        // // console.log(`neo.${date} = ${neo[date]}`);
        // }
    }

   for (let i=0; i < dangerousAsteroids.length; i++) {
     // now that we have created our array of just the asteroids that returned "true" as dangerous, we can
     //now use jQuery to .append the results into our html using a template string!!!
      $("#asteroids").append(`
        <section>
          <h3>Asteroid Name:</h3>
          <p><a href="${dangerousAsteroids[i].nasa_jpl_url}" target="_blank">${dangerousAsteroids[i].name}</a></p>
          <h3>Date of Near Miss:</h3>
          <p>${dangerousAsteroids[i].close_approach_data[0].close_approach_date}</p>
          <h3>Velocity (in mph):</h3>
          <p>${dangerousAsteroids[i].close_approach_data[0].relative_velocity.miles_per_hour}</p>
          <h3>Maxium Diameter (in feet):</h3>
          <p>${dangerousAsteroids[i].estimated_diameter.feet.estimated_diameter_max}</p>
          <h3>Distance from Earth (in miles):</h3>
          <p>${dangerousAsteroids[i].close_approach_data[0].miss_distance.miles}</p>
        </section>
        <hr>
      `);
    }
  })

}) // end jQuery<!DOCTYPE html>


//
// function() {
//   var nasaAPI = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=jkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
//   $.getJSON( nasaAPI, {
//     "is_potentially_hazardous_asteroid": boolean,
//
//        //The first name of the object
//     //This is where the rest of the names of the object are going to be in a list. You are using the API and only pulling down the name: value pairs that you want to view on your page, out of all that are in the list from the API. You want to make sure to post in this object the name and then value type, not the actual data, otherwise you'll only print off one object from the json object.
//
//   })
//   //Write an if statement to run through the API call to check to see if "is_potentially_hazardous_asteroid" === true". And if it is true, you want to print off a loop (for loop) within the if statement to print off each one. There will be an associated tag in your html file to display the results.
// }();
