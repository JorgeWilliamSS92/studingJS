/*
Synchronous JavaScript -> Executes line by line consecutively in a 
                          sequential    manner Code that waits for an operation to complete.

 Asynchronous JavaScript -> Allows multiple operations to be performed
                            concurrently without waiting.
                            Doesn't block the execution flow and allows the program to continue (I/O operations, network requests, etc.)
                            Can be handle with: Callbacks, Promises, Async/Await.
*/

// Callbacks
function t1(t2) {
  setTimeout(() => {
    console.log("Task 1");
    t2();
  }, 3000);
}

function t2() {
  console.log("Task 2");
  t3();
}

//Async/Await
async function t3() {
  console.log("Task 3");
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 4");
      resolve();
    }, 2000);
  });
  console.log("Task 5");
}

t1(t2);
