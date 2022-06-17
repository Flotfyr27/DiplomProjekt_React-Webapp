import { Container, Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import { FC } from "react";
import Helmet from "react-helmet";
import ContactForm from "../components/widget/contactForm";
import ContactInfo from "../components/widget/contactInfo";
import MapLocation from "../components/widget/mapLocation";

const Project: FC = () => {
  const [isSmallDevice] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Helmet>
        <title>Kontakt</title>
      </Helmet>
      <Container maxW={"container.xl"}>
        <Grid
          templateColumns={`${isSmallDevice ? "1fr" : "1fr 1fr"}`}
          templateRows={"auto 1fr"}
          p={"2rem"}
          gap={4}
        >
          <GridItem colStart={1}>
            <ContactInfo />
          </GridItem>
          <GridItem colStart={1} rowSpan={1}>
            <MapLocation />
          </GridItem>
          <GridItem
            rowStart={1}
            colStart={isSmallDevice ? 1 : 2}
            rowSpan={isSmallDevice ? 1 : 2}
          >
            <ContactForm />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};
export default Project;
