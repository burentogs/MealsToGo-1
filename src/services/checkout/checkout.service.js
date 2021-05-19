import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51IdqEbI7JVoWy7H1StIJzZbIOlXT3rimQGhwwvIeTzH4kv31F2fcQryHEvTj6C5XLoXBdQV551UpacVOijrNcqYw00dZnprKd6"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`https://us-central1-onfood-onfood.cloudfunctions.net/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),

    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      console.log(res.status.toString());
      console.log(token.toString());
      console.log(name.toString());
      console.log(amount.toString());

      return Promise.reject("Амжилттай төлөгдлөө!");
    }
    return res.json();
  });
};

