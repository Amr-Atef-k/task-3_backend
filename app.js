const weather = require("./functions/weather");
const geocode = require("./functions/geocode");
const country = process.argv[2];

geocode(country, (error, data) => {
  console.log("error : ", error);
  console.log("data  : ", data);

  if (data) {
    weather(data.latitude, data.longitude, (error, data) => {
      console.log("error : ", error);
      console.log("data  : ", data);
    });
  } else {
    console.log("ERROR! can't access data");
  }
});

//33
