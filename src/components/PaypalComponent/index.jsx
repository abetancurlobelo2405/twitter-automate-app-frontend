import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export function PaypalSubscriptionButton({ plan, children }) {

  const paypalSubscribe = async (data, actions) => {
    return actions.subscription.create({
      plan_id: plan,
    });
  };
  const paypalOnError = (err) => {
    console.log("Error", err);
  };

  const paypalOnApprove = async (data, detail) => {
    const idToUser = await fetch("https://twitterautomation.up.railway.app/twitter/login/start-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subscriptionID: data.subscriptionID,
      }),
    });
    if (idToUser.status === 200) {
      console.log("do something");
    }
  };

  return (
    <>
      {children}
      <PayPalScriptProvider
        options={{
          "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
          intent: "subscription",
          vault: true,
        }}
      >
        <PayPalButtons
          disabled={false}
          createSubscription={paypalSubscribe}
          onApprove={paypalOnApprove}
          onError={paypalOnError}
          onCancel={paypalOnError}
          style={{
            shape: "rect",
            color: "blue",
          }}
        />
      </PayPalScriptProvider>
    </>
  );
}