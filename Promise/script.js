/*
Promise ->  An object that manages asyncronous operations.
            Wrap a Promise Object arond {asynchronous code}
            'I primise to return a value'
            PENDING -> RESOLVED or REJECTED
            new Promise((resolve, reject) => {async code})

DO THESE CHORES IN ORDER:

1. WAKK THE DOG
2. CLEAN THE KITCHEN
3. TAKE OUT THE TRASH

*/

/*
function walkdog(callback) {
  setTimeout(() => {
    console.log("starting activity 1...");
  }, 2000);
  setTimeout(() => {
    console.log("Walking the dog");
    callback();
  }, 3000);
}

function cleanKitchen(callback) {
  setTimeout(() => {
    console.log("starting activity 2...");
  }, 2000);
  setTimeout(() => {
    console.log("Cleaning the kitchen");
    callback();
  }, 3000);
}

function taketrash(callback) {
  console.log("starting activity 3...");
  setTimeout(() => {
    console.log("Taking out the trash");
    callback();
  }, 3000);
}

walkdog(() => {
  cleanKitchen(() => {
    taketrash(() => {
      setTimeout(() => {
        console.log("all activities completed");
      }, 2000);
    });
  });
});
*/

// now using promises:

function getbook(value) {
  return new Promise((resolve, reject) => {
    if (value) {
      setTimeout(() => {
        resolve("Going to the library");
      }, 1000);
    } else {
      reject("You can go to the library");
    }
  });
}

function choosebook() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("book chosen");
    }, 2000);
  });
}

function goingback() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("going back home");
    }, 3000);
  });
}

getbook(false)
  .then((result) => {
    console.log(result);
    return choosebook();
  })
  .then((result) => {
    console.log(result);
    return goingback();
  })
  .then((result) => {
    console.log(result),
      setTimeout(() => {
        console.log("all activities completed");
      }, 2000);
  })
  .catch((error) => {
    console.error(error);
  });
