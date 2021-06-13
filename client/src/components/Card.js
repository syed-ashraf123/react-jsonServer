import React, { useState } from "react";
import Update from "./Update";
import { Link, Redirect } from "react-router-dom";
function Card({ name, phone, email, id }) {
  const [redirect, setRedirect] = useState(false);

  const deleteId = async () => {
    const url = "http://localhost:4000/data/" + id;
    await fetch(url, {
      method: "DELETE",
    });
    setRedirect(true);
  };
  if (redirect) return <Redirect to="/" />;

  return (
    <div>
      <b>Name</b>:<i>{name}</i>
      <br />
      <b>Phone</b>:<i>{phone}</i>
      <br />
      <b>Email</b>:<i>{email}</i>
      <br />
      <button>
        <Link to={{ pathname: "/update", state: { name, email, phone, id } }}>
          Update
        </Link>
      </button>
      <button onClick={() => deleteId()}>Delete</button>
      <hr />
    </div>
  );
}

export default Card;
