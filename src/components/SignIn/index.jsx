import React, { useState } from "react";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const startAuth = async () => {
    setLoading(true);

    await fetch("http://localhost:8080/twitter/login/start-auth")
      .then(async(res) => {
        const response = await res.json()

        console.log(response.redirectUrl)
        if (response.redirectUrl) {
          window.location.href = response.redirectUrl;
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("auth error", err);
      });
  };

  return (
    <>
      <div>SignIn</div>
      <h2> Twitter 3 Legged Authentication </h2>
      {loading && <>Loading....</>}
      {!loading && <button onClick={startAuth}> Sign In With Twitter </button>}
    </>
  );
};

export default SignIn;
