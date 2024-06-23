import axios from "axios";

const urls = [
  "https://swapi.dev/api/people/1",
  "https://swapi.dev/api/people/2",
  // Add more character URLs as needed
];

export const fetchData = async () => {
  try {
    const response = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    return response;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchSwapiData = async () => {
  try {
    const response = await axios.get("https://swapi.dev/api/people/");
    const data = response.data.results;
    console.log(data); // Display the fetched data in the console
    return data; // You can use this data in your component state or elsewhere
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
