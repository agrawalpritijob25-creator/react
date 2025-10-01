// import "React", {useState}  from "react";

import User from "../Graphql";
import useFetch from "./Custom";

const Fetch = () => {
  const { user, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading.....</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      <User />
    </>
  );
};

export default Fetch;
