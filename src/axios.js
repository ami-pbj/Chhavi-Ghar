import axios from "axios";

const instance = axios.create({
    // The API (cloud function) URL => got from functions > index.js
    baseURL: process.env.REACT_APP_API_BASE_URL
});

export default instance;