import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Update(data) {
  const [name, setName] = useState(
    data.location.state ? data.location.state.name : ""
  );
  const [phone, setPhone] = useState(
    data.location.state ? data.location.state.phone : ""
  );
  const [email, setEmail] = useState(
    data.location.state ? data.location.state.email : ""
  );
  const [redirect, setRedirect] = useState(false);
  if (!data.location.state) return <Redirect to="/" />;

  const update = async () => {
    const body = {
      name: name,
      phone: phone,
      email: email,
    };
    await fetch("http://localhost:8000/data/" + data.location.state.id, {
      method: "PUT",
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
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </i>
        <br />
        <b>Phone</b> :
        <i>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </i>
        <br />
        <b>Email</b> :
        <i>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </i>
        <br />
        <button
          onClick={(e) => {
            update(e);
          }}
        >
          Update
        </button>
        <button>Delete</button>
        <hr />
      </div>
    </div>
  );
}

export default Update;
