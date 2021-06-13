import Card from "./Card";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cards() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    let isActive = true;
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/data");
      const res = await response.json();
      if (isActive) setValue(res);
    };
    fetchData();
    return () => {
      isActive = false;
    };
  }, []);
  return (
    <div>
      <div className="App">
        <button>
          <Link to={{ pathname: "/create" }}>Create</Link>
        </button>
        <hr />
        {value.map((x) => (
          <Card
            id={x.id}
            name={x.name}
            phone={x.phone}
            email={x.email}
            key={x.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
