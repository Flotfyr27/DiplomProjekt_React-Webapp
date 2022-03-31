import { FC } from "react";
import Helmet from "react-helmet";
import BaseContainer from "../structural-components/base-container";

const About: FC = () => {
  return (
    <div>
      <Helmet>
        <title>About us</title>
      </Helmet>
      <BaseContainer>
        <h1>Om os</h1>
      </BaseContainer>
    </div>
  );
};
export default About;
