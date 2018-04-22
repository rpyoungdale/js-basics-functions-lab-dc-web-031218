// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return Math.abs(42 - num)
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num)*264
}

function distanceTravelledInFeet(start, finish) {
  return Math.abs(start-finish)*264
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400)
    return 0
  else if (distanceTravelledInFeet(start, destination) <= 2000)
    return (distanceTravelledInFeet(start, destination)-400)*0.02
  else if (distanceTravelledInFeet(start, destination) > 2500)
    return 'cannot travel that far'
  else if (distanceTravelledInFeet(start, destination) > 2000)
    return 25
}
