import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <Link to="about">Click to view our about page</Link>
    </div>
  );
};
export default Home;
