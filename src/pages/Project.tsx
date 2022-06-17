import { Grid, GridItem, Image, useMediaQuery } from "@chakra-ui/react";
import { FC } from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import ContactForm from "../components/widget/contactForm";

const Project: FC = () => {
  const [isSmallDevice] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Helmet>
        <title>Projekter</title>
      </Helmet>
      <Grid
        // h={"100%"}
        templateRows={`${
          isSmallDevice ? "repeat(7,auto)" : "50px repeat(3,1fr)"
        }`}
        templateColumns={`${isSmallDevice ? "1fr" : "repeat(3, 1fr)"}`}
        gap={3}
        p={"2rem"}
      >
        <GridItem bg={"white"} colSpan={isSmallDevice ? 1 : 3} rowSpan={1}>
          <Header
            header={"Vi har en lang række tilbud, der passer netop dig!"}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Image src={"./gallery/insulation.jpg"} />
        </GridItem>

        <GridItem colSpan={1}>
          <Image src={"./gallery/renovation.jpg"} />
        </GridItem>
        {isSmallDevice ? (
          <>
            <GridItem colSpan={1}>
              <Image src={"./gallery/roof.jpg"} />
            </GridItem>

            <GridItem colSpan={1}>
              <Image src={"./gallery/terrace.jpg"} />
            </GridItem>

            <GridItem colSpan={1} rowSpan={2}>
              <ContactForm />
            </GridItem>
          </>
        ) : (
          <>
            <GridItem colSpan={1} rowSpan={2}>
              <ContactForm />
            </GridItem>
            <GridItem colSpan={1}>
              <Image src={"./gallery/roof.jpg"} />
            </GridItem>
            <GridItem colSpan={1}>
              <Image src={"./gallery/terrace.jpg"} />
            </GridItem>
          </>
        )}
      </Grid>
    </>
  );
};
export default Project;
