import axios from "axios";

const instance = axios.create({
    // The API (cloud function) URL => got from functions > index.js
    baseURL: 'base url'
});

export default instance;