const functions = require("firebase-functions");

/* eslint-disable no-unused-vars */
const express = require("express");
const cors = require("cors");

// Secret Key => Stripe.com > Developers > API Keys > Secret Key
// INR
// eslint-disable-next-line max-len
const stripe = require("stripe")("secret key");


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

