import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const User = () => {
  const params = useParams(); //it use to store id and add it to url " lets you read a route's dynamic params filled in by the current URL."
  const navigation = useNavigate(); // navigate to different page "ives access to navigation object"

  console.log(params.id);
  return (
    <>
      <div className="user">
        <h1>User</h1>
        <button onClick={() => navigation("/about")}>Click Me</button>{" "}
        {/* use "/" for routing different page or u can't it take you to different page which is not present */}
      </div>
      ;
    </>
  );
};

export default User;
