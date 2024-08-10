import axios from "axios";

export const dogApi = axios.create({
  baseURL: "https://api.thedogapi.com/v1/",
  headers: {
    "x-api-key": process.env.DOG_API_KEY,
  },
});

export const catApi = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  headers: {
    "x-api-key": process.env.CAT_API_KEY,
  },
});
