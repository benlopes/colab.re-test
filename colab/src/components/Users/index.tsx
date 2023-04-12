import React, { useEffect, useState } from "react";
import Card from "../Card";
import { userDataProps } from "@/types";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((obj) => obj.json())
      .then((result) => {
        setUsers(result["results"]);
      })
      .catch((error) => setError(error));
  }, []);

  if (error) console.log({ error });

  if (users.length === 0) "Loading...";

  return (
    <div className="mt-[50px]">
      {users.map((person: userDataProps) => (
        <Card
          key={person.login.uuid}
          firstName={person.name.first}
          lastName={person.name.last}
          imgSrc={person.picture.large}
          email={person.email}
          city={person.location.city}
          country={person.location.country}
        />
      ))}
    </div>
  );
}

export default Users;
