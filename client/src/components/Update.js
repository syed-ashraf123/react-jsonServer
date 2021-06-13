import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
function Update(data) {
  const [name, setName] = useState(data.location.state.name);
  const [email, setEmail] = useState(data.location.state.email);
  const [phone, setPhone] = useState(data.location.state.phone);
  const [id, setId] = useState(data.location.state.id);
  const [redirect, setRedirect] = useState(false);
  const update = async () => {
    const url = "http://localhost:4000/data/" + id;
    const body = {
      name: name,
      email: email,
      phone: phone,
    };
    await fetch(url, {
      body: JSON.stringify(body),
      method: "PUT",
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
      <button onClick={() => update()}>Update</button>
    </div>
  );
}

export default Update;
