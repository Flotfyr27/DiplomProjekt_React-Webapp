import { Box, Flex, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import Carousel, { CarouselProps } from "../components/carousel";
import Header from "../components/header";
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

  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [isTablet] = useMediaQuery("(max-width: 1000px)");

  return (
    <>
      <Flex align={"center"} position={"relative"}>
        <Box
          pos={"absolute"}
          left={`${isTablet ? "15%" : "20%"}`}
          zIndex={2}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={`${isMobile ? "1rem" : "4rem"}`} color={"#111"}>
            Kvalitetsarbejde siden 2021
          </Heading>
          <Heading fontSize={`${isMobile ? "1.5rem" : "6rem"}`} color={"#111"}>
            Din lokale tømrer
          </Heading>
        </Box>
        <Image src={"./gallery/carpenter.jpg"} fit={"cover"} opacity={"0.47"} />
      </Flex>
    </>
  );
};
export default Home;
