import { FC } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel";
import BaseContainer from "../structural-components/base-container";

const Home: FC = () => {
  // Carousel med ting de laver
  // Kort om dem

  return (
    <>
      <div>
        <h1>This is home page</h1>
      </div>
      <BaseContainer>
        <Carousel />
      </BaseContainer>
    </>
  );
};
export default Home;
