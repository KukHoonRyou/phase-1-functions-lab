function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42;
    }
    if (blocks < 42) {
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    }
    if (destination < start) {
        return (start - destination) * 264;
    }

}
/*
function calculatesFarePrice(start, destination) {
    const distance = distanceFromHqInFeet(start, destination);
    
    if (distance <= 400) {
        return 0;
    }
    if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
    }
    if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    if (distance > 2500) {
        return 'cannot travel that far';
    }
}
*/
function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } 
    if (distance > 400 && distance <= 2000) {
      return 0.02 * (distance - 400);
    } 
    if (distance > 2000 && distance <= 2500) {
      return 25;
    } 
    if (distance > 2500) {
      return 'cannot travel that far';
    }
  }
// Code your solution in this file!
