// Write your solution in this file!
var customerName = 'bob'; // Declare customerName in global scope

function returnsCustomerName() {
  return customerName; // Return the customerName variable
}

returnsCustomerName(); // Returns 'bob'


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Modify the customerName variable
}

function setBestCustomer() {
  bestCustomer = 'not bob'; // Declare and assign bestCustomer in global scope
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Overwrite the value of bestCustomer
}

const leastFavoriteCustomer = 'someone'; // Declare and assign leastFavoriteCustomer in global scope

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'another person'; // Attempt to reassign leastFavoriteCustomer (will result in an error)
}
