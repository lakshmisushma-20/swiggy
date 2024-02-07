import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);

  useEffect(() => {}, {});

  return (
    <div className="user-card">
      <h1>count : {count}</h1>
      <h2>Name:{name}</h2>
      <h2>Location: Deharadun</h2>
      <h2>Contact: @sushma</h2>
    </div>
  );
};
export default User;
