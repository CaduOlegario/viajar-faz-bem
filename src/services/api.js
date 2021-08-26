import axios from "axios";
import md5 from "md5";

const publicKey = "e78b2b907db56d5c440dbf144d5aadf4";
const privateKey = "421ed3e927f78e17978e44134a3eaa41f54478b1";

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

export const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`,
});
