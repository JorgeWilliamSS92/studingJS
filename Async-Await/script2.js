/*
Async/Await = Async = makes a function return a promise
              Await = makes an async function wait for a promise

              Allows you write asynchronous code in a synchronous manner
              Async doesn't have resolve or reject parameters
              Everything after Await is placed in an event queue
*/

function walkDog(i) {
  return new Promise((resolve, reject) => {
    console.log("Starting my morning activitys...");
    if (i) {
      setTimeout(() => {
        resolve("I walked the dog");
      }, 2000);
    } else {
      reject(
        "I did not walk the dog\nI did not clean the house\nI did not go to the gym"
      );
    }
  });
}

function cleanHouse() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I cleaned the house");
    }, 2000);
  });
}

function goToGym() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I went to the gym");
    }, 3000);
  });
}

async function morningActivity(i) {
  try {
    const dog = await walkDog(i);
    console.log(dog);
    const house = await cleanHouse();
    console.log(house);
    const gym = await goToGym();
    console.log(gym);

    setTimeout(() => {
      console.log("I am done with my morning activities");
    }, 1000);
  } catch (error) {
    console.error(error);
  }
}

morningActivity(false);
