// You must RETURN your result in each function!

function printNums(nums) {
  newArray = []
  nums.forEach((num) => {
    newArray.push(num)
  })
  return newArray
}
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */

function returnSums(nums) {
  let newArray = []
  nums.forEach((num) => {
    newArray.push(num + nums.indexOf(num))
  })
  return newArray
}
 /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */

function returnTotal(objs) {
  let total = 0
  objs.forEach((num) => {
    total += num.n
  })
  return total
}
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */

function printMoney(decimals) {
  let newArray = []
  decimals.map((num) => {
    newArray.push(`$${num.toFixed(2)}`)
  })
  return newArray
}
/**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */

function returnAllTrueValues(values) {
  let trueVal = values.filter((num) => {
    if (num.happy === true) {
      return num
    }
  })
  return trueVal
}
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */

function addTwo(nums) {
  let plusTwo = nums.reduce((accumulator, num) => {
    return accumulator + (num + 2)
  }, 0)
  return plusTwo
}
/**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
function joinStrings(strings) {
  let newString = strings.reduce((accumulator, letter) => {
    return accumulator + `${letter}`
  })
  return newString
}
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */

//Bonus
function sortObjectsByValue(objs) {

}
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
