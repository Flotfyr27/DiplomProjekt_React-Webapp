import { Container, Heading, Image, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import Gallery from "../components/gallery";

const GalleryPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Galleri</title>
      </Helmet>
      <Container maxW={"container.xl"}>
        <Heading textAlign={"left"} p={"1rem"}>
          Galleri
        </Heading>
        <Text textAlign={"left"} p={"1rem"}>
          Her kan du få et indblik i lidt af det arbejde vi foretager os
        </Text>
        <Gallery />
      </Container>
    </>
  );
};
export default GalleryPage;
