import axios from 'axios';

export default axios.create({
    // baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',

    // CORS error solved by using http://localhost:8080 as baseURL 
    // and @CrossOrigin(origins = "*") in MovieController.java in IntelliJ IDEA.
    baseURL: "http://localhost:8080",
    headers: {"ngrok-skip-browser-warning": "true"}
});


// const cors = require('cors');
// app.use(cors({
//     origin: 'http://localhost:8080', // use your actual domain name (or localhost), using * is not recommended
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
//     credentials: true
// }))