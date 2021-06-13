import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Create(data) {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [redirect, setRedirect] = useState(false);
  const create = async () => {
    const body = {
      name: name,
      phone: phone,
      email: email,
    };
    await fetch("http://localhost:8000/data/", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRedirect(true);
  };

  if (redirect) return <Redirect to="/" />;

  return (
    <div>
      <div>
        <b>Name</b> :
        <i>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </i>
        <br />
        <b>Phone</b> :
        <i>
          <input type="text" onChange={(e) => setPhone(e.target.value)} />
        </i>
        <br />
        <b>Email</b> :
        <i>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </i>
        <br />
        <button
          onClick={(e) => {
            create(e);
          }}
        >
          Create
        </button>
        <hr />
      </div>
    </div>
  );
}

export default Create;
