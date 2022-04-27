import { FC } from "react";
import { Link } from "react-router-dom";
import Carousel, { CarouselProps } from "../components/carousel";
import BaseContainer from "../structural-components/base-container";

const carouselProps: CarouselProps = {
  slides: [
    { image: "/kitchen.jpg", caption: "At klare et køkken er intet problem." },
    { image: "/nj_favicon.svg", caption: "Vi er profesionelle håndværkere" },
    { image: "/placeholder-house.png", caption: "Din facade klarer vi også!" },
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
