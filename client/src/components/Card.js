import React from "react";
import { Link, Redirect } from "react-router-dom";
function Card({ name, phone, email, id }) {
  const deleteId = async (id) => {
    await fetch(`http://localhost:8000/data/${id}`, {
      method: "DELETE",
    });
    return <Redirect to="/" />;
  };
  return (
    <div>
      <b>Name</b> : <i>{name}</i>
      <br />
      <b>Phone</b> :<i> {phone} </i>
      <br />
      <b>Email</b> :<i> {email}</i>
      <br />
      <button>
        <Link to={{ pathname: "/update", state: { name, email, phone, id } }}>
          Update
        </Link>
      </button>
      <button
        onClick={() => {
          deleteId(id);
        }}
      >
        Delete
      </button>
      <hr />
    </div>
  );
}

export default Card;
