import { Box, Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import ContactForm from "../components/widget/contactForm";
import ContactInfo from "../components/widget/contactInfo";
import MapLocation from "../components/widget/mapLocation";

const Project: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Kontakt</title>
      </Helmet>
      <Container maxW={"container.xl"}>
        <SimpleGrid minChildWidth={"200px"} p={"2rem"} gap={4}>
          <Box>
            <ContactInfo />
            <MapLocation />
          </Box>
          <ContactForm />
        </SimpleGrid>
      </Container>
    </div>
  );
};
export default Project;
