import { useParams } from "react-router-dom";


function User() {
  const { userid } = useParams();

  return <h1 className="bg-gray-600 text-3xl p-3 text-center">User id is: {userid}</h1>;
}

export default User;

// On facebook page opening the profiles of different users does not changes the complete url but yes the portion after
// user is changed eg- https//:facebook/user/jay,kay,ray etc.

//Once you get the userd id then fetch required info or use in backend.

// useParams() is a React Router hook. It is used to read values from the URL.
