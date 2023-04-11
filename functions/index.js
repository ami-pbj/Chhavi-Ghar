const functions = require("firebase-functions");

/* eslint-disable no-unused-vars */
const express = require("express");
const cors = require("cors");

// Secret Key => Stripe.com > Developers > API Keys > Secret Key
// INR
// eslint-disable-next-line max-len
const stripe = require("stripe")("secret key");


// USD
// eslint-disable-next-line max-len
// const stripe = require("stripe")("sk_test_51MgZzRLdUHnfIWNZnLd8dbZg4QITukzXqubPh5TpcRU7SQNxW4StlUNVjtFgM4gLA2qV8uRoNAZOyDXoa5VIyx0P0068yXMR3m");


// API

// - App Config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for the Amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Commands
exports.api = functions.https.onRequest(app);

// Example End Point
// http://127.0.0.1:5001/chhavi-ghar/us-central1/api

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
