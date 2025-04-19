/*
Error     -> An objct that is created to represent a problem tha occurs
          often with user input or establishing a connection to a server.

try{}     -> Encloses code that might potentially cause a error
catch{}   -> Catch and handle any thrown Errors from try{}
finally{} -> (Optional) Always executes. Used mostly for clean up 
              ex.: close files, close connections, release resources.
*/

/*
try {
  console.log("Hello World");
  // NETWORK ERROR
  // PROMISE REJECTION
  // SECURITY ERRORS
} catch (error) {
  console.error("An error occurred: ", error);
} finally {
  // CLOSE FILES
  // CLOSE CONNECTIONS
  // RELEASE RESOURCES
  console.log("Finally block executed");
}

console.log("End of script");
*/

const dividend = Number(window.prompt("Enter a dividend: "));
const divisor = Number(window.prompt("Enter a divisor: "));

try {
  const result = dividend / divisor;

  if (isNaN(divisor) || isNaN(dividend)) {
    throw new Error("Invalid input: Please enter a number");
  }
  if (divisor === 0 || dividend === 0) {
    throw new Error("Division by zero is not allowed");
  }

  console.log(`The result of ${dividend} / ${divisor} is: ${result}`);
} catch (error) {
  console.error("An error occurred: ", error);
} finally {
  console.log("Finally block executed");
}
console.log("End of script");
