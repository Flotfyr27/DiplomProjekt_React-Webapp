import { FC } from "react";
import Helmet from "react-helmet";
import BaseContainer from "../structural-components/base-container";
const About: FC = () => {
  return (
    <>
      <Helmet>
        <title>About us</title>
      </Helmet>
      <div>
        <BaseContainer>
          <h1>About us!</h1>
        </BaseContainer>
      </div>
    </>
  );
};
export default About;
