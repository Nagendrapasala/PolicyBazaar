import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Component</h1>
      <h2>
        <Link to={"/login"}>Go To Login</Link>{" "}
      </h2>
      <h2>
        <Link to={"/policy"}>Go To Policy Page</Link>{" "}
      </h2>
    </div>
  );
}
export default Home;
