fetch("array.JSON")
  .then((response) => response.json())
  .then((data) => {
    console.log(JSON.stringify(data));
    console.log("This is the data: ", data);
  });

fetch("objects.JSON")
  .then((returning) => returning.json())
  .then((data) => {
    //console.log(data);
    setTimeout(() => {
      getData(data);
    }, 2000);
    data.forEach((v) => {
      console.log(`Name: ${v.name}\nAge: ${v.age}\nCity: ${v.address.city}\n`);
    });
  });

async function getData(data) {
  data.forEach((v) => {
    setTimeout(() => {
      console.log(`Name: ${v.name}|${v.age} anos`);
    }, 2000);
  });
}
