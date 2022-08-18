// Code your solution in this file!l
const drivers=function(){
  console.log ( ['Antonia', 'Nuru', 'Amari', 'Mo']);

}

const returnFirstTwoDrivers = function(drivers) {
  return (['Antonia', 'Nuru']);
  
 
};
const returnLastTwoDrivers = function (drivers) {
 
  return (['Amari', 'Mo']);
 

};
 
 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function (fare){
       return fare*num;
    }
}

//   const fareDoubler = createFareMultiplier(2)

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, theDrivers) {
  return theDrivers(arrayOfDrivers);
};
