import { Grid, GridItem } from "@chakra-ui/react";
import { FC } from "react";
import Helmet from "react-helmet";
import ContactForm from "../components/widget/contactForm";

const Project: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Kontakt</title>
      </Helmet>
      <Grid templateColumns={"repeat(3, 1fr)"} p={"2rem"}>
        <GridItem colSpan={2}>Her skal der være contact info</GridItem>
        <GridItem>
          <ContactForm />
        </GridItem>
      </Grid>
    </div>
  );
};
export default Project;
