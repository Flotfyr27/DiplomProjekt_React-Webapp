import { FC } from "react";
import { Link } from "react-router-dom";
import Carousel, { CarouselProps } from "../components/carousel";
import BaseContainer from "../structural-components/base-container";

const carouselProps: CarouselProps = {
  slides: [
    { image: "/logo.png", caption: "Hello there!" },
    { image: "/logo.png", caption: "General Kenobi!" },
  ],
};

const Home: FC = () => {
  // Carousel med ting de laver
  // Kort om dem

  return (
    <>
      <BaseContainer>
        <Carousel {...carouselProps} />
      </BaseContainer>
    </>
  );
};
export default Home;
