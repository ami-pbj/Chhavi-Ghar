import axios from "axios";

const instance = axios.create({
    // The API (cloud function) URL => got from functions > index.js
    baseURL: 'http://127.0.0.1:5001/chhavi-ghar/us-central1/api'
});

export default instance;