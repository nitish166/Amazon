const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response, request } = require("express");
const stripe = require("stripe")(
  "sk_test_51JZwhvSFORGBY1T3KCb2tKQGOfkm5BcjI15UJCsYwTtsnx7zoZpZt4nC4EmAHuR6ncwSVsZO7jOIj9JET1UfkAcF000Ku7gnsm"
);

// API

// API Config

const app = express();

// Middleware

app.use(cors({ origin: true }));
app.use(express.json());
// API Routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recived Boom!! for this amount", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });

  // ok - Created

  response.status(201).send({
    clientSecret: paymentIntent.clientSecret,
  });
});
// Listen command

exports.api = functions.https.onRequest(app);

// example end point

// http://localhost:5001/challenge-44d4f/us-central1/api
