// Code your solution in this file!

//distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the pickup location.

function distanceFromHqInBlocks(someValue) {
       return  Math.abs(42 - someValue);
    }
    
//distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to the pickup location. 
//Use your distanceFromHqInBlocks function to help return the correct value here.
//Each block in Manhattan is 264 feet long.    

function distanceFromHqInFeet(someValue) {
    /* call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
      passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
      the return value of distanceFromHqInBlocks can then be used to calculate feet */
    return distanceFromHqInBlocks(someValue) * 264 ;
    }

/*distanceTravelledInFeet: Calculates the number of feet a passenger travels given a starting block and an ending block — 
it only calculates distance North and South (uptown/downtown). 
It uses the knowledge that a block is 264 feet long. */

function distanceTravelledInFeet(start, destination){
    //returns the number of feet traveled
    return Math.abs(destination - start) * 264;
}    

/* calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), 
  return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet,
  the price is 2 cents per foot (not including 400, which are free!). 
  Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
  Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' 
  if a ride over 2500 feet is requested. */

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    
    if (distanceTravelled <= 400){
        return 0;
    }
    
    else if (distanceTravelled > 400 && distanceTravelled <= 2000){
        return Math.abs((distanceTravelled - 400) * 2) / 100;
    }
    
    else if (distanceTravelled > 2000 && distanceTravelled < 2500){
        return 25;
    }

    else {
        return 'cannot travel that far';
    }    
    
 }
  





