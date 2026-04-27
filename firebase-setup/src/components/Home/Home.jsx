import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return <div>I'm Home</div>;
};

export default Home;
