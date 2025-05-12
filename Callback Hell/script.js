/*
Callback Hell ->  Situation in JavaScript where calbacks are nested whithin
                  other calbacks to the degree where the code is difficult to read.
                  Old pattern to handle asynchronous functions.
                  Use Promises + async/await to avoind callback hell.
*/

/*function task1() {
  setTimeout(() => {
    console.log("Task 1");
  }, 1500);
}

function task2() {
  setTimeout(() => {
    console.log("Task 2");
  }, 2000);
}

function task3() {
  setTimeout(() => {
    console.log("Task 3");
  }, 1000);
}

function task4() {
  setTimeout(() => {
    console.log("Task 4");
  }, 500);
}

task1();
task2();
task3();
task4();
console.log("All tasks completed");
*/

//using callback hell:

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 1500);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2");
    callback();
  }, 2000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3");
    callback();
  }, 1000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4");
    callback();
  }, 500);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        setTimeout(() => {
          console.log("All tasks completed");
        }, 2000);
      });
    });
  });
});
