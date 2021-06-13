import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
function Create() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [redirect, setRedirect] = useState(false);
  const create = async () => {
    const url = "http://localhost:4000/data/";
    const body = {
      name: name,
      email: email,
      phone: phone,
    };
    await fetch(url, {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRedirect(true);
  };
  if (redirect) return <Redirect to="/" />;
  return (
    <div>
      <b>Name</b>:
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <b>Phone</b>:
      <input value={phone} onChange={(e) => setPhone(e.target.value)} />
      <br />
      <b>Email</b>:
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <button onClick={() => create()}>Create</button>
    </div>
  );
}

export default Create;
