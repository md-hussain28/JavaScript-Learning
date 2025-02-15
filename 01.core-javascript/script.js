const key =
  "live_sPdwNiQQMjnKgXIkD0eINYwVZDnJxAKvVzG0sPc3GdbrtcLA8QKpsoJmjxLv5zIK";
const options = {
  method: "GET",
  headers: {
    "x-api-key": key,
  },
};
const url = "https://api.thecatapi.com/v1/images/search?limit=10";

fetch(url, options)
  .then((d) => {
    console.log("Data reached one", d);
    return d.json();
  })
  .then((d) => {
    console.log("Data reached two", d);
  })
  .catch((e) => {
    console.log("Error", e);
  })
  .finally(() => {
    console.log("Resolved");
  });

const fetchData = async (url) => {
  try {
    const data = await fetch(url);
    if (data.ok) {
      const res = await data.json();
      console.log(res);
    } else {
      console.log("Something wrong with data");
    }
  } catch (error) {
    console.log("Error", error);
  }
};

fetchData(url);
