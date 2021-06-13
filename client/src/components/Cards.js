import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
function Cards() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const url = "http://localhost:4000/data";
    const fetching = async () => {
      const res = await fetch(url);
      const response = await res.json();
      setValue(response);
    };
    fetching();
  }, []);
  return (
    <div>
      {value.map((val) => (
        <Card
          key={val.id}
          name={val.name}
          phone={val.phone}
          email={val.email}
          id={val.id}
        />
      ))}
    </div>
  );
}

export default Cards;
